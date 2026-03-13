import { Link } from "react-router-dom";
import AppLogoIcon from "@assets/images/app-logo-icon.png";

/**
 * @typedef {Object} AppLogoProps
 * @prop {string} [className]
 */

/**
 * @param {AppLogoProps} props
 */

function AppLogo({ className }) {
    return (
        <Link
            to={'/'}
            className={`app-logo font-medium flex items-center gap-2 text-xl lg:text-2xl${className ? ` ${className}` : ''}`}
        >
            <img src={AppLogoIcon} alt="App Logo Icon" className="max-w-5 lg:max-w-10" />
            <span>Ecobazar</span>
        </Link>
    )
}

export default AppLogo;