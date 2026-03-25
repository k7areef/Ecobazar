import ContactForm from "@components/sections/ContactForm";
import GoogleMaps from "@components/sections/GoogleMaps";
import useChangeTitle from "@hooks/useChangeTitle";

function ContactPage() {
    useChangeTitle({ title: 'Contact' });
    return (
        <div className="contact-page">
            <ContactForm />
            <GoogleMaps />
        </div>
    )
}

export default ContactPage;