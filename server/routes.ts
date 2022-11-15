import { createProxyMiddleware } from "http-proxy-middleware";
import express from "express";
//import passport from "passport";
import path from "path";
import { createAppointment, deleteAppointment, getAllAppointments, updateAppointment } from "./controllers/Appointment";
import { User } from "./models/User";
import { signIn, signUp } from "./controllers/User";


export const attachRoutes = (app: express.Application): void => {
  const isCompiled = __dirname.indexOf("/dist/") > 0;

  if (isCompiled) {
    app.use(
      "/",
      express.static(path.join(__dirname, "../client"), {
        fallthrough: true
      }) as any
    );
  }
  app.get("/v1/sessions", async (req,res) => {
    try{
      const user = await (req.user as User).serialize();
      return res.send({user});
    }catch(error){
      return res.status(500).send("Login failed.Please try again.");
    }
  })
  app.get("/v1/appointments",getAllAppointments)
  app.post("/v1/appointment/create",createAppointment);
  app.post("/v1/appointment/delete",deleteAppointment);
  app.post("/v1/appointment/status",updateAppointment);
  app.post("/v1/users", signUp);
  app.post("/v1/sessions", signIn);
  /**
   * SPA API
  */

  //Everything else handled by SPA
  if (isCompiled) {
    // @ts-ignore
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "../client/index.html"))
    );
  } else {
    // use dev server
    app.get("*", createProxyMiddleware({ target: "http://localhost:3000" }));
  }
};