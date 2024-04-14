import { User } from "../Models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).send("Please login first");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    next();
};
