import express from "express";
import { attachRoutes } from "./routes";
import helmet from "helmet";
import cors from "cors";

export const app = express();
app.use(helmet());
app.use(cors());
attachRoutes(app);

if (process.argv[1] === __filename) {
    const PORT = 80;
    app.listen(PORT, async () => {
        console.log(`curateddocs is now running on port ${PORT}`)
    })
}