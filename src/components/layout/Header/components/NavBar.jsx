import { faBars, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/blogs", label: "Blog" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" }
];

function NavBar() {

    const { pathname } = useLocation();
    const [isOpen, setIsopen] = React.useState(false);

    return (
        <nav className={`py-5${pathname === "/" ? " border-b-2 border-b-grey-100" : ""}`}>
            <div className="container flex items-center justify-between max-md:flex-wrap">
                {/* Nav Links */}
                <div className={`nav-links-wrapper max-md:w-full max-md:order-1 grid transition-all will-change-auto duration-200 ${isOpen ? "max-md:grid-rows-[1fr] max-md:mt-3" : "max-md:grid-rows-[0fr]"}`}>
                    <div className={`nav-links flex md:items-center gap-1 max-md:flex-col max-md:overflow-hidden transition-opacity will-change-auto duration-200 ease-out ${isOpen ? "max-md:opacity-100 max-md:delay-100" : "max-md:opacity-100"}`}>
                        {
                            navLinks.map((link, index) => (<NavLink
                                key={index}
                                to={link.to}
                                onClick={() => setIsopen(!true)}
                                className={({ isActive }) => `block p-2 font-medium transition duration-200 ease-out max-md:rounded-sm ${isActive ? "text-primary max-md:bg-primary max-md:text-white" : "sm:hover:text-primary max-md:sm:hover:bg-primary max-md:sm:hover:text-white"}`}
                            >
                                {link.label}
                            </NavLink>))
                        }
                    </div>
                </div>
                {/* Support */}
                <a
                    href="tel:+201122124968"
                    aria-label="Support"
                    title="Support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="support flex items-center gap-2 transition duration-200 ease-out sm:hover:text-primary font-medium"
                >
                    <FontAwesomeIcon icon={faPhone} />
                    <span>+20 1122124968</span>
                </a>
                {/* Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsopen(prev => !prev)}
                    title={isOpen ? "Close Menu" : "Open Menu"}
                    aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    className="menu-button text-2xl flex items-center gap-2 transition duration-200 ease-out sm:hover:text-primary font-medium md:hidden"
                >
                    <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                    <span className="sr-only">{isOpen ? "Close Menu" : "Open Menu"}</span>
                </button>
            </div>
        </nav>
    )
}

export default NavBar;