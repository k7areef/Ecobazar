import useChangeTitle from "@hooks/useChangeTitle";

function FaqsPage() {
    useChangeTitle({ title: 'Faqs' });
    return (
        <div className="faqs-page">
            FaqsPage
        </div>
    )
}

export default FaqsPage;