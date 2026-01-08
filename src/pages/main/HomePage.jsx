import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="home-page">
            <div className="container">
                Home Page
                <Link to={'/auth/login'}>Login</Link>
            </div>
        </div>
    )
}

export default HomePage;