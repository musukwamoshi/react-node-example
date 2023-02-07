import { createProxyMiddleware } from "http-proxy-middleware";
import express from "express";
//import passport from "passport";
import path from "path";
import { createArticle, deleteArticle, getAllArticles, updateArticleStatus } from "./controllers/Article";
import { signIn, signOut, signUp } from "./controllers/User";
import { testEndpoint } from "./controllers/Test";
import { loggedIn } from "./authentication/passport";


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
  app.get("/v1/articles", getAllArticles)
  app.post("/v1/article/create", createArticle);
  app.post("/v1/article/delete", deleteArticle);
  app.post("/v1/article/status", updateArticleStatus);
  app.get("/v1/sessions", loggedIn, async (req, res) => {
    try {
      const user = req.user;
      res.send({ user });
    } catch {
      req.logout();
      return res.status(500).send("Login failed");
    }
  });
  app.post("/v1/users", signUp);
  app.post("/v1/sessions", signIn);
  app.post("/v1/logout", signOut);
  app.post("/v1/test", loggedIn, testEndpoint);
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