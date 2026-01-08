import { useAuth } from "@contexts/AuthContext";
import { LOGIN, SIGNUP } from "@utils/api";
import React from "react";
import { useNavigate } from "react-router-dom";

const saveJWT = (jwt) => {
    localStorage.setItem("jwt", jwt);
};

/**
 * @param {'login' | 'signup'} method
 */

function useAuthForm(method = "login") {
    const navigate = useNavigate();
    const { setJwt } = useAuth();
    const handleSubmit = React.useCallback(async (values, actions) => {
        const { setSubmitting, setFieldError } = actions;
        try {
            if (method === "login") {
                const data = await LOGIN(values);
                if (data.error) {
                    setFieldError("identifier", data.error.message)
                    console.log(data.error);
                    return;
                }
                const jwt = data.jwt;
                saveJWT(jwt);
                setJwt(jwt);
                navigate('/');
            } else if (method === "signup") {
                const data = await SIGNUP(values);
                if (data.error) {
                    setFieldError("email", data.error.message)
                    console.log(data.error);
                    return;
                }
                const jwt = data.jwt;
                saveJWT(jwt);
                setJwt(jwt);
                navigate('/');
            }
        } finally {
            setSubmitting(false);
        }
    }, [method, setJwt, navigate]);
    return { handleSubmit }
};

export default useAuthForm;