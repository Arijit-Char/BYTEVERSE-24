import { User } from "../Models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";


export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password -email");

        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};



export const logout = (req, res) => {
    res
        .status(200)
        .cookie("token", "", {
            expires: new Date(Date.now()),
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        })
        .json({
            success: true,
           message:"Logout was successful"
        });
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");
        if (!user) return next(new ErrorHandler("user not found", 400));
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return next(new ErrorHandler("Invalid credentials", 400));
        sendCookie(user, res, "Logged in successfully", 200);
    } catch (error) {
        next(error);
    }
};

export const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) return next(new ErrorHandler("User already exists", 400));
        const hashedPassword = bcrypt.hashSync(password, 10);

        user = await User.create({ name, email, password: hashedPassword });

        sendCookie(user, res, "User created successfully", 201);
    } catch (error) {
        next(error);
    }
};
