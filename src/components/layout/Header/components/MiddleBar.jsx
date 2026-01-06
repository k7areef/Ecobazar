import AppLogo from "@components/common/AppLogo";
import Button from "@components/UI/Button";
import { useModals } from "@contexts/ModalsContext";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function MiddleBar() {

    const { setOpenCartModal } = useModals();

    return (
        <div className="middle-bar border-b border-b-gray-100 py-3">
            <div className="container flex items-center justify-between flex-wrap gap-3">
                <AppLogo />
                <form onSubmit={e => e.preventDefault()} className="search-form relative w-full xl:w-150 max-xl:order-1">
                    <label htmlFor="search" className="absolute left-2.5 top-1/2 -translate-y-1/2 z-1">
                        <FontAwesomeIcon icon={faSearch} />
                    </label>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search"
                        className="p-3 ps-9 rounded-md border border-gray-100 w-full placeholder:text-gray-500 transition focus:border-primary"
                    />
                    <Button
                        className="absolute right-0 top-0 h-full rounded-s-none rounded-e-md z-1"
                    >
                        Search
                    </Button>
                </form>
                <div className="utils flex items-center gap-1.5 sm:gap-3">
                    <Link to={'/wishlist'}>
                        <span className="sr-only">Wishlist</span>
                        <FontAwesomeIcon icon={faHeart} className="text-xl sm:text-3xl" />
                    </Link>
                    <span className="text-gray200">|</span>
                    <div
                        role="button"
                        onClick={() => setOpenCartModal(true)}
                        className="flex items-center gap-4 cursor-pointer"
                    >
                        <div className="cart-counter relative">
                            <div className="count w-5.5 h-5.5 rounded-full bg-hard-primary text-white border border-white absolute -top-3 -right-1.5 flex items-center justify-center text-sm">2</div>
                            <FontAwesomeIcon icon={faShoppingBag} className="text-xl sm:text-3xl" />
                        </div>
                        <div className="cart-info">
                            <p className="text-gray-700 font-medium">Shopping cart:</p>
                            <div className="cart-total font-medium sm:text-xl">$57.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleBar;