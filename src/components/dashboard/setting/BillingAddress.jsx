import React from 'react'
import ContentWrapper from '../components/ContentWrapper'
import * as Yup from 'yup';
import { useAuth } from '@contexts/AuthContext';
import { CHANGE_MY_PASSWORD } from '@utils/api';
import { Formik } from 'formik';
import Input from '@components/UI/Input';
import Button from '@components/UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const inputList = [
    {
        id: "firstName",
        name: "firstName",
        type: "text",
        placeholder: "First Name",
        label: "First Name"
    },
    {
        id: "lastName",
        name: "lastName",
        type: "text",
        placeholder: "Last Name",
        label: "Last Name"
    },
    {
        id: "companyName",
        name: "companyName",
        type: "text",
        placeholder: "Company Name",
        label: "Company Name"
    },
    {
        id: "streetAddress",
        name: "streetAddress",
        type: "text",
        placeholder: "Street Address",
        label: "Street Address"
    },
    {
        id: "country",
        name: "country",
        type: "text",
        autoComplete: "on",
        placeholder: "Country / Region",
        label: "Country / Region"
    },
    {
        id: "states",
        name: "states",
        type: "text",
        placeholder: "States",
        label: "States"
    },
    {
        id: "zipCode",
        name: "zipCode",
        type: "number",
        placeholder: "Zip Code",
        label: "Zip Code"
    },
    {
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "on",
        placeholder: "Email",
        label: "Email"
    },
    {
        id: "phone",
        name: "phone",
        type: "tel",
        autoComplete: "on",
        placeholder: "Phone",
        label: "Phone"
    }
];
const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    country: "",
    states: "",
    zipCode: "",
    email: "",
    phone: ""
};
const validationSchema = Yup.object({
    firstName: Yup.string()
        .required("First name is required")
        .min(2, "Too short!")
        .max(50, "Too long!"),

    lastName: Yup.string()
        .required("Last name is required")
        .min(2, "Too short!")
        .max(50, "Too long!"),

    companyName: Yup.string()
        .nullable(),

    streetAddress: Yup.string()
        .required("Street address is required"),

    country: Yup.string()
        .required("Please select a country"),

    states: Yup.string()
        .required("State/Province is required"),

    zipCode: Yup.string()
        .required("Zip code is required")
        .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, "Invalid Zip code format"),

    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

    phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, "Invalid phone number")
});

function BillingAddress() {

    const { jwt } = useAuth();
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
            resetForm();
        } catch (err) {
            console.log(err);
        } finally {
            setSubmitting(false);
        }

    }, [jwt]);

    return (
        <ContentWrapper
            title="Billing Address"
            className="billing-address"
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
                            <span>Save Changes</span>
                            {isSubmitting && <FontAwesomeIcon icon={faSpinner} className="animate-spin ms-2" />}
                        </Button>
                    </form>
                )}
            </Formik>
        </ContentWrapper>
    )
}

export default BillingAddress