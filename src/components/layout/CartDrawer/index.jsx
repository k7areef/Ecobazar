import Button from "@components/UI/Button";
import Drawer from "@components/UI/Drawer";
import { useAuth } from "@contexts/providers/AuthContext";
import { useCart } from "@contexts/providers/CartContext";
import { faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import CartProduct from "./components/CartProduct";

function CartDrawer() {

    const { isAuth } = useAuth();
    const { isInitialLoading, cart, cartTotal, isOpen, closeDrawer } = useCart();

    return (
        <Drawer isOpen={isOpen} closeDrawer={closeDrawer}>
            <div
                onClick={e => e.stopPropagation()}
                className="cart-drawer h-screen bg-white w-75 sm:w-85 md:w-100 ms-auto p-5 flex flex-col gap-5"
            >
                {
                    !isAuth ? (
                        <div className="m-auto">
                            <Link
                                to={'/login'}
                                onClick={closeDrawer}
                                className="font-medium text-primary underline"
                            >Please login to access cart</Link>
                        </div>
                    ) : isInitialLoading ? (
                        <div className="m-auto">
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin text-2xl text-primary" />
                        </div>
                    ) : (
                        cart?.length > 0 ? (
                            <React.Fragment>
                                {/* Header */}
                                <div className="drawer-header flex items-center justify-between">
                                    <h3 className="font-semibold text-lg">Shopping Cart ({cart?.length})</h3>
                                    <button
                                        type="button"
                                        onClick={closeDrawer}
                                        title={isOpen ? "Close" : "Open"}
                                        aria-label={isOpen ? "Close" : "Open"}
                                        className="btn-close text-2xl transition duration-200 ease-out sm:hover:text-danger"
                                    >
                                        <FontAwesomeIcon icon={faXmark} />
                                        <span className="sr-only">{isOpen ? "Close" : "Open"}</span>
                                    </button>
                                </div>
                                {/* Cart Products */}
                                <div className="cart-products">
                                    {
                                        (cart || []).map((cart, index) => (<CartProduct cart={cart} key={index} />))
                                    }
                                </div>
                                {/* Footer */}
                                <div className="drawer-footer mt-auto">
                                    <div className="footer-head flex items-center justify-between font-medium mb-3">
                                        <span>{cart?.length} Product</span>
                                        <span>${cartTotal}</span>
                                    </div>
                                    <div className="footer-actions space-y-3 text-center [&>a]:rounded-full [&>a]:block">
                                        <Button
                                            to={'/checkout'}
                                            onClick={closeDrawer}
                                            disabled={isInitialLoading}
                                        >
                                            Checkout
                                        </Button>
                                        <Button
                                            to={'/cart'}
                                            onClick={closeDrawer}
                                            disabled={isInitialLoading}
                                            variant="ghost"
                                        >
                                            Go To Cart
                                        </Button>
                                    </div>
                                </div>
                            </React.Fragment>
                        ) : (
                            <div className="m-auto">
                                <span>No data yet</span>
                                {" "}
                                <Link
                                    to={'/shop'}
                                    title="Shop Now"
                                    aria-label="Shop Now"
                                    onClick={closeDrawer}
                                    className="underline text-primary font-medium"
                                >Shop Now</Link>
                            </div>
                        )
                    )
                }

            </div>
        </Drawer>
    )
}

export default CartDrawer;