import Dropdown from "@components/UI/Dropdown";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Topbar() {

    const [language, setLanguage] = React.useState("Eng");
    const [currency, setCurrency] = React.useState("USD");
    const [user] = React.useState(null);

    return (
        <div className="topbar bg-gray-800 text-gray-300 py-3">
            <div className="container flex items-center justify-between max-lg:flex-col">
                <a href="https://www.google.com/maps" target="_blank" className="location-store flex items-center gap-1 transition sm:hover:text-white sm:hover:underline">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                </a>
                <div className="utils flex items-center gap-3 flex-wrap">
                    {/* Language Dropdown */}
                    <Dropdown
                        current={language}
                        setCurrent={setLanguage}
                        className="sm:hover:text-white transition"
                        options={[
                            {
                                value: "العربية",
                                props: {
                                    dir: "rtl"
                                }
                            },
                            { value: "Eng" },
                            { value: "French" },
                        ]}
                    />
                    {/* Curreny Dropdown */}
                    <Dropdown
                        current={currency}
                        setCurrent={setCurrency}
                        className="sm:hover:text-white transition"
                        options={[
                            { value: "EGP" },
                            { value: "USD", },
                            { value: "SAR" },
                        ]}
                    />
                    {/* Split */}
                    <span>|</span>
                    {/* Auth Links */}
                    {
                        !user && <div className="auth-links flex items-center gap-1">
                            <Link
                                to={'/auth/login'}
                                className="transition sm:hover:text-white"
                            >Sign In</Link>
                            <span>/</span>
                            <Link
                                to={'/auth/signup'}
                                className="transition sm:hover:text-white"
                            >Sign Up</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Topbar;