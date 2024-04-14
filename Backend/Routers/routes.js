import express from "express";
import { resumedata } from "../Controllers/pdftotextapi.js";
import multer from 'multer';
import { geminikeyinfo } from "../Controllers/geminikeyinfo.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { getjobs } from "../Controllers/getjobsbykeyword.js";
import { getresumeanalysis } from "../Controllers/resumeanalysis.js";

const router = express.Router();
const upload = multer();
router.get("/", () => {
    console.log("Home");
});

router.post("/resumedata", upload.single('file'), isAuthenticated, resumedata);
router.get("/geminikeyinfo", isAuthenticated, geminikeyinfo);
router.post("/getjobsbykey", isAuthenticated, getjobs);
router.post("/resumeanalysis", isAuthenticated, getresumeanalysis);


export default router;
