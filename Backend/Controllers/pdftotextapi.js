import axios from 'axios';
import FormData from 'form-data';
import ErrorHandler from '../middlewares/error.js';
import { User } from '../Models/user.js';

export const resumedata = async (req, res, next) => {
    try {
        if (!req.file) {
            return new ErrorHandler("Resume not found", 400);
        }

        const data = new FormData();
        data.append('file', req.file.buffer, { filename: req.file.originalname });
        data.append('page', '1');

        const options = {
            method: 'POST',
            url: 'https://pdf-to-text-converter.p.rapidapi.com/api/pdf-to-text/convert',
            headers: {
                'X-RapidAPI-Key': process.env.RapidAPIKey,
                'X-RapidAPI-Host': process.env.RapidAPIHost,
                ...data.getHeaders(),
            },
            data: data,
        };


        try {
            const response = await axios.request(options);
            const user = await User.findById(req.user._id);
            if (user) {

                user.resume = response.data;
            }
            await user.save();

            res.status(200).json({
                success: true,
                data: response.data,
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
