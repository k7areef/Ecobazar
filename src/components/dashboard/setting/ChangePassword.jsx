import { Formik } from "formik";
import ContentWrapper from "../components/ContentWrapper";
import * as Yup from 'yup';
import Input from "@components/UI/Input";
import Button from "@components/UI/Button";
import React from "react";
import { CHANGE_MY_PASSWORD } from "@utils/api";
import { useAuth } from "@contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const inputList = [
    {
        id: "currentPassword",
        name: "currentPassword",
        type: "password",
        placeholder: "Current Password",
        label: "Current Password"
    },
    {
        id: "password",
        name: "password",
        type: "password",
        placeholder: "New Password",
        label: "New Password"
    },
    {
        id: "passwordConfirmation",
        name: "passwordConfirmation",
        type: "password",
        placeholder: "Confirm Password",
        label: "Confirm Password"
    }
];
const initialValues = {
    currentPassword: "",
    password: "",
    passwordConfirmation: ""
};
const validationSchema = Yup.object({
    currentPassword: Yup.string()
        .required("Current password is required"),

    password: Yup.string()
        .required("New password is required")
        .min(6, "Password must be at least 6 characters")
        .max(64, "Password is too long"),

    passwordConfirmation: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref('password'), null], "Passwords must match")
});

function ChangePassword() {

    const { jwt, setJwt } = useAuth();
    const handleSubmit = React.useCallback(async (values, actions) => {
        const { setSubmitting, setFieldError, resetForm } = actions;
        try {
            const data = await CHANGE_MY_PASSWORD(jwt, values);
            if (data.error) {
                console.log(data.error);
                if (data.error.message === "The provided current password is invalid") {
                    setFieldError("currentPassword", data.error.message)
                } else if (data.error.message === "Your new password must be different than your current password") {
                    setFieldError("password", data.error.message)
                } else if (data.error.message === "Passwords do not match") {
                    setFieldError("passwordConfirmation", data.error.message)
                } else {
                    setFieldError("currentPassword", data.error.message)
                }
                return;
            }
            setJwt(data.jwt)
            resetForm();
        } catch (err) {
            console.log(err);
        } finally {
            setSubmitting(false);
        }

    }, [jwt, setJwt]);

    return (
        <ContentWrapper
            title="Change Password"
            className="change-password"
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Inputs */}
                        <div className="inputs-grid grid sm:grid-cols-2 gap-3 mb-3">
                            {
                                inputList.map((input, index) => (<Input
                                    key={index}
                                    {...{
                                        ...input,
                                        onChange: handleChange,
                                        value: values[input.name]
                                    }}
                                />))
                            }
                        </div>
                        {/* Submit */}
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center"
                        >
                            <span>Change Password</span>
                            {isSubmitting && <FontAwesomeIcon icon={faSpinner} className="animate-spin ms-2" />}
                        </Button>
                    </form>
                )}
            </Formik>
        </ContentWrapper>
    )
}

export default ChangePassword;