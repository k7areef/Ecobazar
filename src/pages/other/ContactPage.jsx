import ContactForm from "@components/sections/ContactForm";
import useChangeTitle from "@hooks/useChangeTitle";

function ContactPage() {
    useChangeTitle({ title: 'Contact' });
    return (
        <div className="contact-page">
            <ContactForm />
        </div>
    )
}

export default ContactPage;