import AuthForm from "@components/auth/AuthForm";

function SignupPage() {
    return (
        <div className="signup-page py-5 md:py-10">
            <div className="container">
                <AuthForm method="signup" />
            </div>
        </div>
    )
}

export default SignupPage;