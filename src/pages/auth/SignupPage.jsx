import useChangeTitle from "@hooks/useChangeTitle";

function SignupPage() {
    useChangeTitle({ title: 'Signup' });
    return (
        <div className="signup-page">
            SignupPage
        </div>
    )
}

export default SignupPage;