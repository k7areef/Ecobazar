import Button from "@components/UI/Button";
import Drawer from "@components/UI/Drawer";
import { useCart } from "@contexts/providers/CartContext";
import { faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function CartDrawer() {

    const { isLoading, cart, isOpen, closeDrawer } = useCart();

    return (
        <Drawer isOpen={isOpen} closeDrawer={closeDrawer}>
            <div
                onClick={e => e.stopPropagation()}
                className="cart-drawer h-screen bg-white w-75 sm:w-85 md:w-100 ms-auto p-5 flex flex-col gap-5"
            >
                {
                    isLoading ? (
                        <div className="m-auto">
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin text-2xl text-primary" />
                        </div>
                    ) : (
                        cart?.items?.lenth > 0 ? (
                            <React.Fragment>
                                {/* Header */}
                                <div className="drawer-header flex items-center justify-between">
                                    <h3 className="font-semibold text-lg">Shopping Cart ({0})</h3>
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
                                    Cart Products
                                </div>
                                {/* Footer */}
                                <div className="drawer-footer mt-auto">
                                    <div className="footer-head flex items-center justify-between font-medium mb-3">
                                        <span>{2} Product</span>
                                        <span>${0}</span>
                                    </div>
                                    <div className="footer-actions space-y-3 text-center [&>a]:rounded-full [&>a]:block">
                                        <Button
                                            to={'/checkout'}
                                            className=""
                                        >
                                            Checkout
                                        </Button>
                                        <Button
                                            to={'/checkout'}
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