/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@components/UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import FormikField from '@components/UI/FormikField';
import { supabase } from '@utils/supabaseClient';
import toast from 'react-hot-toast';

const fields = [
    {
        id: "new_password",
        name: "new_password",
        type: "password",
        label: "New Password",
        placeholder: "Enter your new password"
    },
    {
        id: "confirm_password",
        name: "confirm_password",
        type: "password",
        label: "Confirm Password",
        placeholder: "Confirm your new password"
    }
]
const initialValues = {
    new_password: '',
    confirm_password: '',
}
const validationSchema = Yup.object({
    new_password: Yup.string().required('New password is required').min(6, 'Password must be at least 6 characters'),
    confirm_password: Yup.string().oneOf([Yup.ref('new_password'), null], 'Passwords must match')
});

/**
 * @param {RecentOrderHistoryProps} props
 */

function ChangePassword({ className }) {

    const handleSubmit = React.useCallback(async (values, actions) => {
        const { setSubmitting, resetForm } = actions;
        setSubmitting(true);
        try {
            const { error: updateError } = await supabase.auth.updateUser({
                password: values.new_password
            })
            if (updateError) throw updateError;
            toast.success("Password updated successfully");
            resetForm();
        } catch (err) {
            toast.error(err.message || "Something went wrong");
            console.error("Update Error:", err);
        } finally {
            setSubmitting(false);
        }
    }, []);

    return (
        <div className={`change-password border border-grey-100 rounded-lg${className ? ` ${className}` : ''}`}>
            {/* Heading */}
            <div className="heading p-3 md:p-5 border-b border-b-grey-100">
                <h3 className='font-semibold text-lg'>Account Settings</h3>
            </div>
            {/* Content */}
            <div className="content-wrapper p-3 md:p-5">
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => handleSubmit(values, actions)}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        dirty
                    }) => (
                        <form onSubmit={handleSubmit}>
                            {/* Fields */}
                            <div className="fields mb-5 grid grid-cols-1 lg:grid-cols-2 gap-3">
                                {
                                    fields.map((field, index) => (<FormikField
                                        key={index}
                                        label={field.label}
                                        {...{
                                            ...field,
                                            onChange: handleChange,
                                            onBlur: handleBlur,
                                            value: values[field.name],
                                        }}
                                    />))
                                }
                            </div>
                            {/* Submit */}
                            <Button
                                type="submit"
                                title="Save Changes"
                                aria-label="Save Changes"
                                disabled={!dirty || isSubmitting}
                                className='rounded-full disabled:opacity-75 disabled:cursor-not-allowed disabled:pointer-events-none'
                            >
                                {
                                    isSubmitting ? (
                                        <FontAwesomeIcon icon={faSpinner} className='animate-spin' />
                                    ) : (
                                        <>Change Password</>
                                    )
                                }
                            </Button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ChangePassword;