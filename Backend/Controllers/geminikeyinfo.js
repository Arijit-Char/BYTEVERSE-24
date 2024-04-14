import { GoogleGenerativeAI } from "@google/generative-ai"
import dotenv from "dotenv";
import { User } from "../Models/user.js";

dotenv.config();

export const geminikeyinfo = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user.resume.length <= 0) {
            return res.status(500).json({
                success: false,
                error: "Resume data not found"
            });
        }
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const responseData = user.resume

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `This is my resume data in text format. Resume Data: ${responseData}. Check the whole resume including projects, experience, skills,
         tech stacks, etc., to find out what kind of job types this resume is targeting. Send me an array of strings in JavaScript where the array contains only the job types,
          sub job types,related job types ,every job types the resume is targeting in double inverted comma. If the resume is targeting only one job type, send an array with that one job type.
           If it's targeting two job types, send an array with those two job types, and so on. If the resume is not targeting any jobs, just send an empty array.
            If the resume is not a resume, just send an array containing only the text: 'This is not a Resume.`;


        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            user.targetedjobs = text;
            await user.save();

            res.status(200).json({
                success: true,
                data: text,
            });
            req.geminikeyinfo = text;
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};
