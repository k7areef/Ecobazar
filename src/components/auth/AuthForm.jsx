import React from "react";
import Button from "@components/UI/Button";
import Input from "@components/UI/Input";
import { LOGIN_CONFIG, SIGNUP_CONFIG } from "@configs/authConfigs";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import useAuthForm from "@hooks/useAuthForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

/**
 * @param {Object} props
 * @param {'login' | 'signup'} [props.method]
 */

function AuthForm({ method = "login" }) {

    const configs = {
        login: LOGIN_CONFIG,
        signup: SIGNUP_CONFIG
    };
    const config = configs[method];

    const { handleSubmit } = useAuthForm(method);

    return (
        <Formik
            initialValues={config.initialValues}
            validationSchema={config.validationSchema}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit} className="w-full md:max-w-150 md:mx-auto rounded-md bg-white shadow p-5 border border-gray-100">
                    <div className="header mb-5">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold">{config?.ui?.header?.title}</h2>
                    </div>
                    {/* Inputs */}
                    <div className="form-inputs space-y-3 mb-5">
                        {
                            config.inputList.map((input, index) => (<Input
                                {...input}
                                key={index}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />))
                        }
                    </div>
                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {
                            isSubmitting ? (
                                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                            ) : config?.ui?.submitText
                        }
                    </Button>
                    {/* Footer */}
                    <div className="form-footer flex items-center justify-center gap-1 mt-5">
                        <p className="text-gray-600">{config?.ui?.footer?.text}</p>
                        <Link to={config?.ui?.footer?.linkPath} className="font-medium transition sm:hover:text-primary">
                            {config?.ui?.footer?.linkText}
                        </Link>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default AuthForm;