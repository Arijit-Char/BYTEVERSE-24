import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import defRouter from "./Routers/routes.js";
import userRouter from "./Routers/user.js";
import { errorMiddleware } from "./middlewares/error.js";

dotenv.config();


export const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);


app.use("/api", defRouter);
app.use("/api", userRouter);
app.use(errorMiddleware);
