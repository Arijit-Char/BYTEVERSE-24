import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { User } from "../Models/user.js";

dotenv.config();
function removeBackticks(str) {
    if (str.startsWith('```') && str.endsWith('```')) {
        return str.slice(3, -3);
    } else {
        return str;
    }
}

const inputString = "```\n{\n  \"ProblemsWithResume\": [],\n  \"SkillsLagging\": [],\n  \"KeywordsToUse\": [\n    \"Scrum\",\n    \"Agile\",\n    \"Azure DevOps\",\n    \"Scaled Agile Framework\",\n    \"Client Interaction\",\n    \"Problem Solving\",\n    \"Public Trust security clearance\"\n  ],\n  \"Suggestions\": [\n    \"Highlight experience with cloud solutions design, configuration, and deployment.\",\n    \"Emphasize consulting skills and experience in defining use cases and developing solutions based on customer requirements.\",\n    \"Mention experience with UI/UX design and optimization for maximum speed and scalability.\",\n    \"Include examples of reusable code and libraries developed for future use.\",\n    \"Demonstrate familiarity with testing frameworks and version control systems.\"\n  ]\n}\n```";

const outputString = removeBackticks(inputString);

console.log(outputString);

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

        const prompt = `This is my resume data in text format. Resume Data: ${responseData}, This is the job I am applying for. Job Description: ${description} and This is the job qualification I am applying for. Job Qualification: ${qualification}.Check my resume, job description and job qualification and find out all the points 
        why my resume is not suitable for this resume. In which section , which skills I am lagging,Which Keywards I need to use in my resume for this job, how can I make my resume perfect for this job.Send me an object where 
        the object only contains Problems with this resume for this job role, Skills I am lagging for this job role, Keywards I need to use in my resume for this job and suggestions how can I make my resume perfect for this job. Just send me only the object, no need to send anythin else. Don't add anything just send the object`;

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;

            const text =removeBackticks(response.text());

console.log(text);

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
