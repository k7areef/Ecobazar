import { faBars, faBlog, faCircleInfo, faEnvelope, faHouse, faPhone, faShoppingCart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
    {
        label: "Home",
        to: "/",
        icon: faHouse
    },
    {
        label: "Shop",
        to: "/shop",
        icon: faShoppingCart
    },
    {
        label: "Blog",
        to: "/blog",
        icon: faBlog
    },
    {
        label: "About Us",
        to: "/about",
        icon: faCircleInfo
    },
    {
        label: "Contact Us",
        to: "/contact",
        icon: faEnvelope
    }
];

function Navbar() {

    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <nav className="py-3">
            <div className={`container flex md:items-center justify-between flex-wrap`}>
                {/* Nav Links */}
                <div className={`nab-links max-md:order-1 max-md:w-full max-md:transition-all ${openMenu ? "max-md:max-h-400 max-md:mt-3" : "max-md:max-h-0 max-md:overflow-hidden"}`}>
                    <ul className="flex md:items-center gap-2 md:gap-5 max-md:flex-col">
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.to}
                                    onClick={() => setOpenMenu(false)}
                                    className={({ isActive }) => `flex items-center gap-2 font-medium text-lg max-md:p-2 max-md:rounded-md transition ${isActive ? "md:text-primary max-md:text-white max-md:bg-primary" : "md:hover:text-primary max-md:hover:bg-primary max-md:hover:text-white"}`}
                                >
                                    <FontAwesomeIcon icon={link.icon} className="text-xl md:hidden!" />
                                    <span>{link.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Contact Support */}
                <a
                    href="https://wa.link/div698"
                    className="support-contact flex items-center gap-1 font-medium"
                    target="_blank"
                    title="Contact Support"
                >
                    <FontAwesomeIcon icon={faPhone} />
                    <span>+20 1122124968</span>
                </a>
                {/* Menu Toggler */}
                <button
                    type="button"
                    className="menu-toggler md:hidden"
                    title="Menu Toggler"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <FontAwesomeIcon icon={openMenu ? faXmark : faBars} className="text-2xl" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar;