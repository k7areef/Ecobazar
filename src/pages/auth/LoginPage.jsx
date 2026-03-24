import Button from "@components/UI/Button";
import FormikField from "@components/UI/FormikField";
import { useAuth } from "@contexts/providers/AuthContext";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useChangeTitle from "@hooks/useChangeTitle";
import { supabase } from "@utils/supabaseClient";
import { Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const fields = [
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
];
const initialValues = {
    email: '',
    password: ''
};
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().required('Password is Required')
});

function LoginPage() {

    useChangeTitle({ title: 'Login' });

    const { isAuth } = useAuth();

    const navigate = useNavigate();

    const handlesubmit = React.useCallback(async (values, actions) => {
        const { setSubmitting } = actions;

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password
            });
            if (!data || error) {
                // ! Show Error
                toast.error(error.message);
                throw new Error(error.message);
            };
            // ? Show Success
            toast.success('Welcome Back!');
            // Navigate to Home
            navigate('/');
        } catch (err) {
            console.log(err);
        } finally {
            setSubmitting(false);
        }
    }, [navigate]);

    // Redirect to Home
    if (isAuth) return <Navigate to={'/'} replace />;

    return (
        <div className="login-page py-5 md:py-10 lg:py-15">
            <div className="container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => handlesubmit(values, actions)}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit} className="md:w-140 md:mx-auto p-5 md:p-7 rounded-lg border border-grey-50 shadow-md space-y-5">
                            {/* Header */}
                            <div className="form-header">
                                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">Sign In</h3>
                            </div>
                            {/* Fields */}
                            <div className="fields space-y-3">
                                {
                                    fields.map((field, index) => (<FormikField
                                        key={index}
                                        {...{
                                            ...field,
                                            value: values[field.name],
                                            onChange: handleChange,
                                            onBlur: handleBlur
                                        }}
                                    />))
                                }
                            </div>
                            {/* Submit */}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-full"
                            >
                                {
                                    isSubmitting ? (
                                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                    ) : (
                                        <>Login</>
                                    )
                                }
                            </Button>
                            {/* Footer */}
                            <div className="form-footer">
                                <p className="text-center">Don't have an account? <Link to="/signup" className="text-primary sm:hover:text-hard-primary transition-colors duration-200 ease-out font-medium">Sign Up</Link></p>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default LoginPage;