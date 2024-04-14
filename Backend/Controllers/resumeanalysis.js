import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { User } from "../Models/user.js";

dotenv.config();

export const getresumeanalysis = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user.resume.length <= 0) {
            return res.status(500).json({
                success: false,
                error: "Resume data not found"
            });
        }

        const { description, qualification } = req.body;

        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const responseData = user.resume;

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `This is my resume data in text format. Resume Data: ${responseData},This is the job description I am applying for. Job Description: ${description} and
         This is the job qualification I am applying for. Job Qualification: ${qualification}. Check the whole resume , job description and job qualification, to find out 
        all the points why my resume is not suitable for this job. In which section , which skills I am lagging,Which Keywards I need to use in my resume for this 
        job, how can I make my resume perfect for this job and many thing.Find as much problems as you can and store them into every index an array of strings.If it has only two problems 
        with my resume, send an array with those two problems in 2 indexes in detailed explanation in string format and so on.Make an index for every points.If the resume is perfect for this job, send an empty array.Send only the array nothing else `

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;

            const text = (response.text());


            res.status(200).json({
                success: true,
                data: text,
            });
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
