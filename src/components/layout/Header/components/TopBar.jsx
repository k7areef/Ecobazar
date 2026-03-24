import React from "react";
import Dropdown from "@components/UI/Dropdown";
import { faLocationDot, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Languages from "@data/languages.json";
import Currencies from "@data/currencies.json";
import UnitedStatesFlag from "@assets/images/countries-flags/united-states.png";
import SpainFlag from "@assets/images/countries-flags/spain.png";
import franceFlag from "@assets/images/countries-flags/france.png";
import EgyptFlag from "@assets/images/countries-flags/egypt.png";
import USDCurrency from "@assets/images/currencies/usd.png";
import EURCurrency from "@assets/images/currencies/eur.png";
import EGPCurrency from "@assets/images/currencies/egp.png";
import { Link } from "react-router-dom";
import { useAuth } from "@contexts/providers/AuthContext";

const flagsMaper = {
    unitedStates: UnitedStatesFlag,
    spain: SpainFlag,
    france: franceFlag,
    egypt: EgyptFlag
};

const currenciesMaper = {
    usd: USDCurrency,
    eur: EURCurrency,
    egp: EGPCurrency
};

function TopBar() {

    const [languageSelected, setLanguageSelected] = React.useState("en");
    const [currencySelected, setCurrencySelected] = React.useState("USD");
    const { isAuth, user, authLoading } = useAuth();

    return (
        <div className="top-bar bg-grey-800 text-grey-300 py-5">
            <div className="container flex items-center justify-between max-md:flex-col gap-3">
                {/* Location */}
                <a
                    target="_blank"
                    title="Store Location"
                    rel="noopener noreferrer"
                    aria-label="Store Location"
                    href="https://www.google.com/maps"
                    className="location flex items-center gap-1.5 transition duration-200 ease-out hover:text-primary"
                >
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="text-inherit!">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                </a>
                {/* Utils */}
                <div className="utils flex items-center gap-3">
                    {/* Languages */}
                    <Dropdown
                        options={Languages}
                        selected={Languages.find((language) => language.code === languageSelected).short}
                        onSelectedChange={(option) => setLanguageSelected(option.code)}
                        optionComponent={({ value, flag }) => (<div className="option-content min-w-40 flex items-center gap-2 font-medium group-[.active]:text-primary">
                            <img src={flagsMaper[flag]} alt={value} width={24} />
                            <span>{value}</span>
                        </div>)}
                    />
                    {/* Currencies */}
                    <Dropdown
                        options={Currencies}
                        selected={Currencies.find((currency) => currency.code === currencySelected).short}
                        onSelectedChange={(option) => setCurrencySelected(option.code)}
                        optionComponent={({ value, symbol }) => (<div className="option-content min-w-40 flex items-center gap-2 font-medium group-[.active]:text-primary">
                            <img src={currenciesMaper[symbol]} alt={value} width={24} />
                            <span>{value}</span>
                        </div>)}
                    />
                    {/* Separator */}
                    <span>|</span>
                    {/* My Account / Auth */}
                    {
                        authLoading ? (
                            <div className="auth-loading flex items-center gap-2">
                                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                <span>Loading...</span>
                            </div>
                        ) : isAuth ? (
                            <div className="welcome-user">
                                <Link to={'/dashboard'} className="sm:hover:underline sm:hover:text-white transition-colors duration-200">
                                    {
                                        (user.first_name) ? (
                                            <div className="user-name">
                                                {user.first_name}
                                                {user.last_name ? " " + user.last_name : ""}
                                            </div>
                                        ) : (
                                            <div className="user-name">
                                                {user.email}
                                            </div>
                                        )
                                    }
                                </Link>
                            </div>
                        ) : (
                            <div className="auth flex items-center gap-2 [&>a]:font-medium [&>a]:transition [&>a]:sm:hover:text-primary">
                                <Link
                                    to={'/login'}
                                >Login</Link>
                                <span>/</span>
                                <Link
                                    to={'/signup'}
                                >Signup</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TopBar;