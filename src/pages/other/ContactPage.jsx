import Button from "@components/UI/Button";
import Input from "@components/UI/Input";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import * as Yup from "yup";

const contactInfo = [
    {
        icon: faMapMarkerAlt,
        label: '2715 Ash Dr. San Jose, South Dakota 83475',
        value: 'https://www.google.com/maps'
    },
    {
        icon: faEnvelope,
        label: 'kh3reef@gmail.com',
        value: 'mailto:kh3reef@gmail.com'
    },
    {
        icon: faPhone,
        label: '(219) 555-0114, (164) 333-0487',
        value: 'tel:2195550114'
    }
];

const inputsList = [
    {
        id: "email",
        name: "email",
        placeholder: "Email Address",
        type: "email",
        autoComplete: "off"
    },
    {
        id: "subject",
        name: "subject",
        placeholder: "Subject",
        type: "text",
        autoComplete: "off"
    },
    {
        id: "message",
        name: "message",
        placeholder: "Message",
        type: "text",
        autoComplete: "off"
    }
];

function ContactPage() {
    return (
        <div className="contact-page">
            <div className="container">
                {/* Contact Form */}
                <div className="contact-form py-5 md:py-10 flex gap-5 max-md:flex-col items-start">
                    <div className="contact-info p-5 rounded-md shadow bg-white w-full md:w-85">
                        <ul className="flex flex-col gap-3">
                            {contactInfo.map((item, index) => (
                                <li key={index} className="not-last-of-type:*:border-b not-last-of-type:*:border-b-gray-100">
                                    <a href={item.value} target="_blank" className="flex flex-col gap-3 items-center text-center py-3 transition sm:hover:text-primary">
                                        <FontAwesomeIcon icon={item.icon} className="text-3xl" />
                                        <span>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="contact-form p-5 rounded-md shadow bg-white w-full">
                        <div className="header mb-5">
                            <h2 className="font-semibold mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl">Just Say Hello!</h2>
                            <p className="text-gray-500">Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
                        </div>
                        <Formik
                            initialValues={{ email: '', subject: '', message: '' }}
                            validationSchema={Yup.object({
                                email: Yup.string().required(),
                                subject: Yup.string().required(),
                                message: Yup.string().required(),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="inputs flex flex-col gap-3 mb-5">
                                        {inputsList.map((item, index) => (
                                            <Input key={index} {...{
                                                ...item,
                                                onChange: handleChange,
                                                onBlur: handleBlur
                                            }} />
                                        ))}
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            {/* Office Map */}
            <div className="office-map">
                <iframe
                    className="embed-map-frame"
                    width="100%"
                    height="350px"
                    src="https://maps.google.com/maps?hl=en&q=University%20of%20Oxford&t=&z=2&ie=UTF8&iwloc=B&output=embed"
                ></iframe>
            </div>
        </div>
    )
}

export default ContactPage;