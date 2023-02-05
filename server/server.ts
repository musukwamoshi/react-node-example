import express from "express";
import { attachRoutes } from "./routes";
import helmet from "helmet";
import cors from "cors";
import cookieSession from "cookie-session";
import passport from "passport";


export const app = express();
app.use(
    cookieSession({
        name: "session",
        keys: [process.env.SESSION_SECRET || ""]
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
attachRoutes(app);

if (process.argv[1] === __filename) {
    const PORT = process.env.SERVERPORT || 80;
    app.listen(PORT, async () => {
        console.log(`curateddocs is now running on port ${PORT}`)
    })
}