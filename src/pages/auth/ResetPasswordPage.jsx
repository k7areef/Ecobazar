import useChangeTitle from "@hooks/useChangeTitle";

function ResetPasswordPage() {
    useChangeTitle({ title: 'Reset Password' });
    return (
        <div className="reset-password-page">
            ResetPasswordPage
        </div>
    )
}

export default ResetPasswordPage;