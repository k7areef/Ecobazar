import useChangeTitle from "@hooks/useChangeTitle";

function LoginPage() {
    useChangeTitle({ title: 'Login' });
    return (
        <div className="login-page">
            LoginPage
        </div>
    )
}

export default LoginPage;