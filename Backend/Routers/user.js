import express from "express";
import { getUser, login, logout, register } from "../Controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/users/logout", logout);
router.post("/users/login", login);
router.post("/users/register", register);
router.get("/users/userdetails", isAuthenticated, getUser);

export default router;
