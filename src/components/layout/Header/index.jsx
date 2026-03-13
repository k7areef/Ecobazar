import TopBar from "./components/TopBar";
import MiddleBar from "./components/MiddleBar";
import NavBar from "./components/NavBar";

function Header() {
    return (
        <header>
            <TopBar />
            <MiddleBar />
            <NavBar />
        </header>
    )
}

export default Header;