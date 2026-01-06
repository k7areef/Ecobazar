import MiddleBar from "./components/MiddleBar";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

function Header() {
    return (
        <header>
            <Topbar />
            <MiddleBar />
            <Navbar />
        </header>
    )
}

export default Header;