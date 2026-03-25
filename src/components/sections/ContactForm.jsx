import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@components/UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faSpinner, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FormikField from '@components/UI/FormikField';
import toast from 'react-hot-toast';

const fields = [
    {
        id: "full_name",
        name: "full_name",
        type: "text",
        autoComplete: "on",
        placeholder: "Enter your full name",
    },
    {
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "on",
        placeholder: "Enter your email address",
    },
    {
        id: "subject",
        name: "subject",
        type: "text",
        autoComplete: "on",
        placeholder: "Enter your subject",
        mainClassName: "md:col-span-2"
    },
    {
        id: "message",
        name: "message",
        type: "textarea",
        autoComplete: "on",
        placeholder: "Enter your message",
        typeField: "textarea",
        mainClassName: "md:col-span-2",
    },
]
const initialValues = {
    full_name: "",
    email: "",
    subject: "",
    message: "",
}
const validationSchema = Yup.object({
    full_name: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters').max(500, 'Message must be at most 500 characters'),
});

const contactInfo = [
    {
        icon: faLocationDot,
        value: "https://www.google.com/maps",
        label: "2715 Ash Dr. San Jose, South Dakota 83475"
    },
    {
        icon: faEnvelope,
        value: "mailto:kh3reed@gmail.com",
        label: "kh3reed@gmail.com"
    },
    {
        icon: faPhone,
        value: "tel:+201122124968",
        label: "+201122124968"
    }
];

function ContactForm() {

    const handleSubmit = React.useCallback(async (values, actions) => {
        const { setSubmitting, resetForm } = actions;
        setSubmitting(true);
        try {
            console.log(values);
            resetForm();
        } catch (err) {
            toast.error(err.message || "Something went wrong");
            console.error("Update Error:", err);
        } finally {
            setSubmitting(false);
        }
    }, []);

    return (
        <section className="contact-form-section py-5 md:py-10" id="contactForm">
            <div className="container">
                <div className="content-grid grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
                    <div className="contact-info bg-white p-3 md:p-5 rounded-lg border border-grey-100">
                        {
                            contactInfo.map((contact, index) => (<a
                                key={index}
                                title={contact.label}
                                aria-label={contact.label}
                                href={contact.value}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex flex-col gap-2 items-center justify-center text-center p-3 md:p-5 not-last-of-type:border-b not-last-of-type:border-b-grey-100 transition-colors sm:hover:bg-primary/10'
                            >
                                <FontAwesomeIcon icon={contact.icon} className='text-primary' size='2x' />
                                <span>{contact.label}</span>
                            </a>))
                        }
                    </div>
                    <div className="from-contact lg:col-span-2">
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, actions) => handleSubmit(values, actions)}
                        >
                            {({
                                values,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                                dirty
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    {/* Header */}
                                    <div className="form-header mb-5">
                                        <h3 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2">Just Say Hello!</h3>
                                        <p>
                                            Do you fancy saying hi to me or you want to get started with your project and you need my help?
                                            Feel free to contact me.
                                        </p>
                                    </div>
                                    {/* Fields */}
                                    <div className="fields mb-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {
                                            fields.map((field, index) => (<FormikField
                                                key={index}
                                                label={field.label}
                                                {...{
                                                    ...field,
                                                    onChange: handleChange,
                                                    value: values[field.name],
                                                }}
                                            />))
                                        }
                                    </div>
                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        title="Change Password"
                                        aria-label="Change Password"
                                        disabled={!dirty || isSubmitting}
                                        className='rounded-full disabled:opacity-75 disabled:cursor-not-allowed disabled:pointer-events-none max-sm:w-full'
                                    >
                                        {
                                            isSubmitting ? (
                                                <FontAwesomeIcon icon={faSpinner} className='animate-spin' />
                                            ) : (
                                                <>Send Message</>
                                            )
                                        }
                                    </Button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;