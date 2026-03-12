import { useLocation } from "react-router-dom";

function Breadcrumbs() {

    const { pathname } = useLocation();

    if (pathname === '/') return null; // Don't render breadcrumbs on the home page

    return (
        <div className="breadcrumbs">
            <div className="container">
                Breadcrumbs
            </div>
        </div>
    )
}

export default Breadcrumbs;