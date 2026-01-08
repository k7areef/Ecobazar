import * as Yup from "yup";

export const LOGIN_CONFIG = {
    inputList: [
        {
            id: "identifier",
            name: "identifier",
            type: "email",
            placeholder: "Email",
            autoComplete: "on"
        },
        {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Password"
        }
    ],
    initialValues: {
        identifier: "",
        password: ""
    },
    validationSchema: Yup.object({
        identifier: Yup.string().required("Email is a required field").email("Email must be a valid email"),
        password: Yup.string().required().min(6).max(64)
    }),
    ui: {
        header: {
            title: "Sign In"
        },
        submitText: "Login",
        footer: {
            text: "Don’t have account?",
            linkText: "Register",
            linkPath: "/auth/signup"
        }
    }
};
export const SIGNUP_CONFIG = {
    inputList: [
        {
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Username",
            autoComplete: "on"
        },
        {
            id: "email",
            name: "email",
            type: "email",
            placeholder: "Email",
            autoComplete: "on"
        },
        {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Password"
        }
    ],
    initialValues: {
        username: "",
        email: "",
        password: ""
    },
    validationSchema: Yup.object({
        username: Yup.string().required().min(3).max(64),
        email: Yup.string().required().email(),
        password: Yup.string().required().min(6).max(64)
    }),
    ui: {
        header: {
            title: "Create Account"
        },
        submitText: "Create Account",
        footer: {
            text: "Already have account",
            linkText: "Login",
            linkPath: "/auth/login"
        }
    }
};