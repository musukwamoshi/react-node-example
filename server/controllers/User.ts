import { NextFunction, Request, Response } from "express";
import passport from "passport";
import { User } from "../models/User";

export async function signUp(req:Request,res:Response, next: NextFunction):Promise<any>{
    const {email,password1} = req.body;
    if(!email){
        return res.status(400).send({error:"Email is required"});
    }
    const existingUser = await User.query().whereRaw("LOWER(email) = ?", `${email.toLowerCase()}`).first();
    if(existingUser){
        return res.status(401).send({error:"That email is already registered"});
    }
    //save user
    const user = new User();
    user.email = email.toLowerCase();
    user.setPassword(password1);
    await user.save();
    console.debug("user created!");
    req.login(user, async err =>{
        if(err){
            return next(err);
        }
        res.locals.currentUser = req.user;
        return res.send({user: await (req.user as User).serialize()});
    });
}

export async function signIn(req:Request,res:Response, next:NextFunction):Promise<void>{
    passport.authenticate("user",(err,user) => {
        if(err){
            return next(err);
        }

        if(!user){
            return res.status(401).send({error: "There was an error logging you in.Please try again"})
        }
        req.login(user,async err => {
            if(err){
                return next(err);
            }
            return res.send({user: await user.serialize()});
        });
    })(req,res,next);

    res.send({});
}

export const signOut = (req: Request, res:Response): any => {
    req.logout();
    //req.session = null;
    return res.send({});
}