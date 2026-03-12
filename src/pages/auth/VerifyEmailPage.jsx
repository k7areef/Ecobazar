import useChangeTitle from "@hooks/useChangeTitle";

function VerifyEmailPage() {
    useChangeTitle({ title: 'Verify Email' });
    return (
        <div className="verify-email-page">
            VerifyEmailPage
        </div>
    )
}

export default VerifyEmailPage;