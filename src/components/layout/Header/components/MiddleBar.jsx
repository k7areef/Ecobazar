import React from "react";
import AppLogo from "@components/common/AppLogo";
import Button from "@components/UI/Button";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faMagnifyingGlassArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCart } from "@contexts/providers/CartContext";

function MiddleBar() {

    const { toggleDrawer } = useCart()

    const [openSearch, setOpenSearch] = React.useState(false);

    return (
        <div className="middle-bar py-5 border-b-2 border-b-grey-100">
            <div className="container flex items-center justify-between max-lg:flex-wrap">
                {/* App Logo */}
                <AppLogo />
                {/* Search Form */}
                <div className={`search-form-wrapper max-lg:w-full lg:w-1/2 max-lg:order-1 grid transition-all duration-200 will-change-auto ${openSearch ? "max-lg:grid-rows-[1fr] max-lg:mt-3" : "max-lg:grid-rows-[0fr]"}`}>
                    <div className={`search-form overflow-hidden transition-opacity ${openSearch ? "max-lg:opacity-100" : "max-lg:opacity-0"}`}>
                        <form onSubmit={e => e.preventDefault()} className="relative">
                            <label htmlFor="search">
                                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2" />
                            </label>
                            <input
                                required
                                id="search"
                                type="text"
                                name="search"
                                placeholder="Search..."
                                className="w-full py-3 px-6 ps-10 rounded-md border-2 border-grey-100"
                            />
                            <Button
                                type="submit"
                                title="Search"
                                aria-label="Search"
                                className="rounded-e-md absolute right-0 h-full top-0"
                            >
                                Search
                            </Button>
                        </form>
                    </div>
                </div>
                {/* Utils */}
                <div className="utiles flex items-center gap-3">
                    {/* Wishlist */}
                    <Link
                        to={'/wishlist'}
                        className="text-2xl transition duration-200 ease-out sm:hover:text-primary"
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
                    {/* Separator */}
                    <span className="w-0.5 h-6 bg-grey-100" />
                    {/* Cart */}
                    <button
                        type="button"
                        title="Open Cart"
                        aria-label="Open Cart"
                        onClick={toggleDrawer}
                        className="flex items-center gap-6"
                    >
                        {/* Icon */}
                        <div className="icon-container relative">
                            <div className="cart-items-count bg-hard-primary text-white w-6 h-6 rounded-full flex items-center justify-center absolute z-1 top-0 right-0 translate-x-2.5 -translate-y-4">{5}</div>
                            <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
                        </div>
                        {/* Cart Info */}
                        <div className="cart-info text-start">
                            <span className="text-grey-700">Shopping cart:</span>
                            <h3 className="mt-0.5 font-semibold text-lg">${10}.00</h3>
                        </div>
                    </button>
                    {/* Search Button */}
                    <button
                        type="button"
                        title={openSearch ? "Close Search" : "Open Search"}
                        aria-label={openSearch ? "Close Search" : "Open Search"}
                        onClick={() => setOpenSearch(prev => !prev)}
                        className={`text-2xl transition duration-200 ease-out lg:hidden ${openSearch ? "text-primary" : "sm:hover:text-primary"}`}
                    >
                        <FontAwesomeIcon icon={openSearch ? faMagnifyingGlassArrowRight : faSearch} />
                        <span className="sr-only">{openSearch ? "Close Search" : "Open Search"}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MiddleBar;