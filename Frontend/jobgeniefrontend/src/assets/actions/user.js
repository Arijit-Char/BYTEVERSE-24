import axios from "axios";

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "Get_Register_Request",
        });

        const { data } = await axios.post(
            "http://localhost:5000/api/users/register",
            {
                name,
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }
        );

        dispatch({
            type: "Get_Register_Success",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "Get_Register_Failure",
            payload: error.response.data.message,
        });
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "Get_Login_Request",
        });

        const { data } = await axios.post(
            "http://localhost:5000/api/users/login",
            {
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        dispatch({
            type: "Get_Login_Success",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "Get_Login_Failure",
            payload: error.response.data.message,
        });
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: "Get_Logout_Request",
        });

        const { data } = await axios.get("http://localhost:5000/api/users/logout");

        dispatch({
            type: "Get_Logout_Success",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "Get_Logout_Failure",
            payload: error.response.data.message,
        });
    }
};


export const getData = () => async (dispatch) => {
    try {
        dispatch({
            type: "Get_User_Request",
        });


        const { data: userdata } = await axios.get(
            "http://localhost:5000/api/users/userdetails",
            {
                withCredentials: true,
            }
        );

        dispatch({
            type: "Get_User_Success",
            payload: userdata,
        });
    } catch (error) {
        dispatch({
            type: "Get_User_Failure",
            payload: error.response.data.message,
        });
    }
};
export const resumeUpload = (file) => async (dispatch) => {
    try {
        dispatch({
            type: "Get_Resume_Request",
        });

        const formData = new FormData();
        formData.append('file', file);

        const { data: resumeData } = await axios.post(
            "http://localhost:5000/api/resumedata",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            }
        );

        dispatch({
            type: "Get_Resume_Success",
            payload: resumeData.data,
        });

        const { data: geminiKeyInfo } = await axios.get(
            "http://localhost:5000/api/geminikeyinfo",
            {
                withCredentials: true,
            }
        );

        dispatch({
            type: "Get_Gemini_Key_Info_Success",
            payload: geminiKeyInfo,
        });
    } catch (error) {
        dispatch({
            type: "Get_Resume_Failure",
            payload: error.response ? error.response.data.message : "An error occurred",
        });
    }
};

export const GetJobListing = (job) => async (dispatch) => {
    try {
        dispatch({
            type: "Get_JL_Request",
        })

        dispatch({
            type: "Get_JL_Success",
            payload: job,
        });
    } catch (error) {
        dispatch({
            type: "Get_JL_Failure",
            payload: error.response.data.message,
        });
    }
};