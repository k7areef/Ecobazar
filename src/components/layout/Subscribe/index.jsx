import { useLocation } from "react-router-dom";

function Subscribe() {

    const { pathname } = useLocation();
    if (pathname === '/') return null;

    return (
        <div className="subscribe">
            <div className="container">
                Subscribe
            </div>
        </div>
    )
}

export default Subscribe;