import Banner from "./components/Banner";
import Breadcrumbs from "./components/Breadcrumbs";
import Nav from "./components/Nav";

function Header() {
    return (
        <header>
            <Banner />
            <Nav />
            <Breadcrumbs />
        </header>
    )
}

export default Header;