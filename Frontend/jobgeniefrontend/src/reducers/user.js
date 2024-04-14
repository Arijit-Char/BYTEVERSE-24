import { createReducer } from "@reduxjs/toolkit"
const initialState = {
    loading: true,
}
const initialJobListing = {
    loading: true,
    joblisting: "",
}



export const Register = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_Register_Request', (state) => {
            state.loading = true;
            state.isAuthenticated = false;

        })
        .addCase('Get_Register_Success', (state, action) => {

            state.loading = false;
            state.isAuthenticated = true;
            state.message = action.payload;
        })
        .addCase('Get_Register_Failure', (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;

        });
});
export const Login = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_Login_Request', (state) => {
            state.loading = true;
            state.isAuthenticated = false;

        })
        .addCase('Get_Login_Success', (state, action) => {

            state.loading = false;
            state.isAuthenticated = true;
            state.message = action.payload;
        })
        .addCase('Get_Login_Failure', (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        });
});
export const Logout = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_Logout_Request', (state) => {
            state.loading = true;
        })
        .addCase('Get_Logout_Success', (state, action) => {

            state.loading = false;
            state.isAuthenticated = false;
            state.message = action.payload;
        })
        .addCase('Get_Logout_Failure', (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;

            state.error = action.payload;
        });
});
export const ResumeUpload = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_Resume_Request', (state) => {
            state.loading = true;
        })
        .addCase('Get_Resume_Success', (state, action) => {

            state.loading = false;
            state.message = action.payload;
        })
        .addCase('Get_Resume_Failure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});
export const Getuser = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_User_Request', (state) => {
            state.loading = true;
        })
        .addCase('Get_User_Success', (state, action) => {

            state.loading = false;
            state.user = action.payload;
        })
        .addCase('Get_User_Failure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});
export const GetJobListing = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_JL_Request', (state) => {
            state.loading = true;
        })
        .addCase('Get_JL_Success', (state, action) => {

            state.loading = false;
            state.joblisting = action.payload;
        })
        .addCase('Get_JL_Failure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});
export const GetJobListingByKeyword = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_JLBK_Request', (state) => {
            state.loading = true;
        })
        .addCase('Get_JLBK_Success', (state, action) => {

            state.loading = false;
            state.joblistingbykey = action.payload;
        })
        .addCase('Get_JLBK_Failure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});
export const JobDetails = createReducer(initialState, (builder) => {
    builder
        .addCase('Get_JobDetails_Request', (state) => {
            state.loading = true;
        })
        .addCase('Get_JobDetails_Success', (state, action) => {

            state.loading = false;
            state.jobdetails = action.payload;
        })
        .addCase('Get_JobDetails_Failure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});