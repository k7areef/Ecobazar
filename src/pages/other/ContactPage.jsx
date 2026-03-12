import useChangeTitle from "@hooks/useChangeTitle";

function ContactPage() {
    useChangeTitle({ title: 'Contact' });
    return (
        <div className="contact-page">
            ContactPage
        </div>
    )
}

export default ContactPage;