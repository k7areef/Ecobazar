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
import toast from 'react-hot-toast';
import { useBillingAddress } from '@contexts/providers/UserBillingAddressContext';
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
        id: "company_name",
        name: "company_name",
        type: "text",
        label: "Company Name",
        autoComplete: "on",
        placeholder: "Enter your company name"
    },
    {
        id: "street_address",
        name: "street_address",
        type: "text",
        label: "Street Address",
        autoComplete: "on",
        placeholder: "Enter your street address",
        mainClassName: "lg:col-span-3"
    },
    {
        id: "country_region",
        name: "country_region",
        type: "text",
        label: "Country / Region",
        autoComplete: "on",
        placeholder: "Enter your country / region"
    },
    {
        id: "states",
        name: "states",
        type: "text",
        label: "States",
        autoComplete: "on",
        placeholder: "Enter your states"
    },
    {
        id: "zip_code",
        name: "zip_code",
        type: "text",
        label: "Zip Code",
        min: 5,
        max: 5,
        pattern: "[0-9]{5}",
        autoComplete: "on",
        placeholder: "Enter your zip code"
    },
    {
        id: "email",
        name: "email",
        type: "email",
        label: "Email",
        autoComplete: "on",
        placeholder: "Enter your email address",
        mainClassName: "lg:col-span-2"
    },
    {
        id: "phone",
        name: "phone",
        type: "text",
        label: "Phone",
        autoComplete: "on",
        placeholder: "Enter your phone number"
    }
]
const validationSchema = Yup.object({

});

/**
 * @param {RecentOrderHistoryProps} props
 */

function BillingAddress({ className }) {

    const { loading, billingAddress, setBillingAddress } = useBillingAddress();

    // Initial values
    const initialValues = React.useMemo(() => {
        return {
            first_name: loading ? 'Loading...' : billingAddress?.first_name || '',
            last_name: loading ? 'Loading...' : billingAddress?.last_name || '',
            company_name: loading ? 'Loading...' : billingAddress?.company_name || '',
            street_address: loading ? 'Loading...' : billingAddress?.street_address || '',
            country_region: loading ? 'Loading...' : billingAddress?.country_region || '',
            states: loading ? 'Loading...' : billingAddress?.states || '',
            zip_code: loading ? 'Loading...' : billingAddress?.zip_code || '',
            email: loading ? 'Loading...' : billingAddress?.email || '',
            phone: loading ? 'Loading...' : billingAddress?.phone || ''
        }
    }, [loading, billingAddress]);

    // Handle Submit
    const handleSubmit = React.useCallback(async (values, actions) => {
        const { setSubmitting, resetForm } = actions;
        setSubmitting(true);
        try {
            // Update billing address in database
            const { error } = await supabase.from("addresses")
                .update(values)
                .eq("id", billingAddress.id);
            if (error) throw error;
            // Update local state
            toast.success("Billing Address updated successfully");
            setBillingAddress(prev => ({ ...prev, ...values }));
            resetForm();
        } catch (err) {
            // Show error message
            toast.error(err.message || "Something went wrong");
            console.error("Update Error:", err);
        } finally {
            setSubmitting(false);
        }
    }, [billingAddress, setBillingAddress]);

    return (
        <div className={`billing-address border border-grey-100 rounded-lg${className ? ` ${className}` : ''}`}>
            {/* Heading */}
            <div className="heading p-3 md:p-5 border-b border-b-grey-100">
                <h3 className='font-semibold text-lg'>Billing Address</h3>
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
                            <div className="fields mb-5 grid grid-cols-1 lg:grid-cols-3 gap-3">
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

export default BillingAddress;