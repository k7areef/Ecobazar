import { Link } from "react-router-dom";
import AppLogoImage from "@assets/app-logo.png";

function AppLogo() {
    return (
        <Link
            to={'/'}
            className="flex items-center gap-2.5 font-medium text-2xl"
        >
            <img src={AppLogoImage} alt="app-logo" />
            <span className="max-sm:hidden">Ecobazar</span>
        </Link>
    )
}

export default AppLogo;