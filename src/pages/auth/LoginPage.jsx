import AuthForm from "@components/auth/AuthForm";

function LoginPage() {
    return (
        <div className="login-page py-5 md:py-10">
            <div className="container">
                <AuthForm method="login" />
            </div>
        </div>
    );
}

export default LoginPage;