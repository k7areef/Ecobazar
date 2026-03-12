import useChangeTitle from "@hooks/useChangeTitle";

function NotFoundPage() {
    useChangeTitle({ title: 'Ecobazar Not Found' });
    return (
        <div className="not-found-page">
            NotFoundPage
        </div>
    )
}

export default NotFoundPage;