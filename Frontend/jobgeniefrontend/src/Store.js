import { configureStore } from "@reduxjs/toolkit";
import { GetJobListing, GetJobListingByKeyword, Getuser, JobDetails, Login, Logout, Register, ResumeUpload } from "./reducers/user";

const store = configureStore({
    reducer: {
        register: Register,
        login: Login,
        logout: Logout,
        getuser: Getuser,
        resumeupload: ResumeUpload,
        joblisting: GetJobListing,
        joblistingbykey: GetJobListingByKeyword,
        jobdetails: JobDetails,
    },
});

export default store;