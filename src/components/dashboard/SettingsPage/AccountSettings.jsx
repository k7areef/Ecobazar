/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import React from 'react';
import { useProfile } from '@contexts/providers/UserProfileContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@components/UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import FormikField from '@components/UI/FormikField';
import toast from 'react-hot-toast';
import DefaultAvatar from '@assets/images/default-avatar.png';
import { useAuth } from '@contexts/providers/AuthContext';
import { supabase } from '@utils/supabaseClient';

const fields = [
    {
        id: "first_name",
        name: "first_name",
        type: "text",
        label: "First Name",
        autoComplete: "on",
        placeholder: "Enter your first name"
    },
    {
        id: "last_name",
        name: "last_name",
        type: "text",
        label: "Last Name",
        autoComplete: "on",
        placeholder: "Enter your last name"
    },
    {
        id: "email",
        name: "email",
        type: "email",
        label: "Email",
        autoComplete: "on",
        placeholder: "Enter your email"
    },
    {
        id: "phone",
        name: "phone",
        type: "tel",
        label: "Phone",
        autoComplete: "on",
        placeholder: "Enter your phone number"
    }
]
const validationSchema = Yup.object({
    first_name: Yup.string(),
    last_name: Yup.string(),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string(),
    avatar_url: Yup.string().url('Invalid URL')
});

/**
 * @param {RecentOrderHistoryProps} props
 */

function AccountSettings({ className }) {

    // Auth
    const { isAuth } = useAuth();
    // Profile
    const { loading, profile, setProfile } = useProfile();

    // Initial values
    const initialValues = React.useMemo(() => {
        return {
            first_name: loading ? 'loading...' : profile?.first_name || '',
            last_name: loading ? 'loading...' : profile?.last_name || '',
            email: loading ? 'loading...' : profile?.email || '',
            phone: loading ? 'loading...' : profile?.phone || '',
            avatar_url: loading ? 'loading...' : profile?.avatar_url || ''
        }
    }, [loading, profile]);

    // Handle Submit
    const handleSubmit = React.useCallback(async (values, actions) => {
        const { setSubmitting, resetForm } = actions;
        setSubmitting(true);
        try {
            const { error } = await supabase.from("profiles").update(values).eq("id", profile?.id);
            if (error) throw error;
            toast.success("Profile updated successfully");
            setProfile(prev => ({ ...prev, ...values }));
            resetForm();
        } catch (err) {
            toast.error(err.message || "Something went wrong");
            console.error("Update Error:", err);
        } finally {
            setSubmitting(false);
        }
    }, [profile, setProfile]);

    // Handle Change Avatar
    const handleChangeAvatar = React.useCallback(async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
            // 
        } catch (err) {
            console.log(err);
        } finally {
            // Finally
        }
    }, []);

    return (
        <div className={`account-settings border border-grey-100 rounded-lg${className ? ` ${className}` : ''}`}>
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
                            {/* Form Content */}
                            <div className="form-content-wrapper flex lg:items-start max-lg:flex-col-reverse gap-5 lg:gap-10">
                                {/* Fields */}
                                <div className="fields mb-5 space-y-3 lg:w-[60%]">
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
                                {/* Avatar */}
                                <div className="user-avatar lg:w-[40%]">
                                    {/* Avatar */}
                                    <div className="avatar w-36 h-36 rounded-full mx-auto overflow-hidden bg-green-50">
                                        {
                                            loading ? (
                                                <div className='loading w-full h-full flex items-center justify-center gap-2'>
                                                    <FontAwesomeIcon icon={faSpinner} className='animate-spin' />
                                                    <span>Loading...</span>
                                                </div>
                                            ) : (
                                                <img
                                                    src={profile?.avatar_url || DefaultAvatar}
                                                    alt='User Avatar'
                                                    className='w-full h-full object-cover'
                                                />
                                            )
                                        }
                                    </div>
                                    {/* Action */}
                                    <Button
                                        variant='outline'
                                        title="Upload Avatar"
                                        aria-label="Upload Avatar"
                                        disabled={!isAuth || loading || isSubmitting}
                                        className='block mx-auto rounded-full disabled:opacity-75 disabled:pointer-events-none p-0!'
                                    >
                                        <label className='px-4 py-2 sm:py-3 block cursor-pointer'>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name='avatar_url'
                                                className='hidden'
                                                onChange={handleChangeAvatar}
                                            />
                                            Chose Avatar
                                        </label>
                                    </Button>
                                </div>
                            </div>
                            {/* Submit */}
                            <Button
                                type="submit"
                                title="Save Changes"
                                aria-label="Save Changes"
                                disabled={!isAuth || !dirty || isSubmitting}
                                className='rounded-full disabled:opacity-75 disabled:cursor-not-allowed disabled:pointer-events-none'
                            >
                                {
                                    isSubmitting ? (
                                        <FontAwesomeIcon icon={faSpinner} className='animate-spin' />
                                    ) : (
                                        <>Save Changes</>
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

export default AccountSettings;