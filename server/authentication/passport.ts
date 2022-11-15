
import { NextFunction, Request, Response } from "express";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../models/User";

export const loggedIn = (req: Request, res: Response, next: NextFunction): any => {
    const user = req.user as User;
    if (user) {
        next();
    } else {
        res.status(401).send({ error: "Not logged in!" });
    }
};

passport.use("user", new LocalStrategy(
    {
        usernameField: "email",
    },
    async (email, password, done) => {
        const user = await User.query().whereRaw("LOWER(email) = ?", `${email.toLowerCase()}`).first();
        if (!user) {
            console.debug("Incorrect email.");
            return done(null, false)
        }
        if (!user.validatePassword(password)) {
            console.debug("Incorrect Password");
            return done(null, false)
        }

        return done(null, user);
    }
));

passport.serializeUser((user: any, done) => {
    if (user) {
        done(null, user.id)
    }
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({ id });
    if (user) {
        done(null, user)
    } else {
        console.warn(`User not found`, `${id}`);
        done(null, null)
    }
})