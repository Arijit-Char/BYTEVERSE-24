import { GoogleGenerativeAI } from "@google/generative-ai"
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
        const responseData = user.resume

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `This is my resume data in text format. Resume Data: ${responseData}, This is the job I am applying for. Job Description: ${description} and This is the job qualification I am applying for. Job Qualification: ${qualification}.Check my resume, job description and job qualification and find out all the points 
        why my resume is not suitable for this resume. In which section , which skills I am lagging,Which Keywards I need to use in my resume for this job, how can I make my resume perfect for this job.Send me an object in JavaScript where 
        the objects contains this all points in detailed formet. Object Contains sections including Problems with this resume for this job, Reasons why it will not be shortlisted at the time of resume shortlisting rount,
         Skills I am lagging, Keywards I need to use in my resume for this job, how can I make my resume perfect for this job. Just send me the object no need to send anythin else.`;


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
            req.resumeanalysis = text;
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
