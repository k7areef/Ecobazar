import React from "react";
import Button from "@components/UI/Button";
import { useAuth } from "@contexts/AuthContext";
import { useCart } from "@contexts/CartContext";
import { useModals } from "@contexts/ModalsContext";
import { faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function CartModal() {

    const { user } = useAuth();
    const { cart, isLoading } = useCart();

    const { openCartModal, setOpenCartModal } = useModals();

    const closeCartModalHandler = React.useCallback(() => {
        setOpenCartModal(false);
    }, [setOpenCartModal]);

    return (
        <div
            onClick={closeCartModalHandler}
            className={`cart-modal w-full h-screen fixed top-0 left-0 z-100 bg-black/60 transition duration-300 ease-out ${openCartModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <div
                onClick={e => e.stopPropagation()}
                className={`cart-modal-content bg-white p-5 md:p-7 flex flex-col gap-3 max-w-100 ms-auto h-full transition duration-300 ease-out ${openCartModal ? "translate-x-0" : "translate-x-full"}`}
            >
                {
                    isLoading ? (
                        <div className="flex items-center justify-center gap-2 my-auto mx-auto">
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                            <span>Loading...</span>
                        </div>
                    ) : (
                        !user ? (
                            <div className="flex flex-col gap-3 w-full my-auto mx-auto">
                                <Button
                                    to={'/auth/login'}
                                    onClick={closeCartModalHandler}
                                    className="w-full text-center"
                                >
                                    Login
                                </Button>
                                <Button
                                    to={'/auth/signup'}
                                    variant="secondary"
                                    onClick={closeCartModalHandler}
                                    className="w-full text-center"
                                >
                                    Signup
                                </Button>
                            </div>
                        ) : (!cart || cart?.product?.length === 0) ? (
                            <Link
                                to={'/shop'}
                                onClick={closeCartModalHandler}
                                className="underline my-auto mx-auto transition sm:hover:text-primary"
                            >Shopping and add to cart</Link>
                        ) : (
                            <>
                                {/* Header */}
                                <div className="head flex items-center justify-between">
                                    <h3 className="font-medium sm:text-lg">Shoping Card ({2})</h3>
                                    <button
                                        type="button"
                                        onClick={closeCartModalHandler}
                                        className="transition sm:hover:text-danger"
                                    >
                                        <span className="sr-only">Close Cart Modal</span>
                                        <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                                    </button>
                                </div>
                                {/* Cart Items */}
                                <div className="cart-items">
                                    Cart Items
                                </div>
                                {/* Foot Content */}
                                <div className="foot mt-auto">
                                    <div className="cart-info flex items-centere justify-between mb-3">
                                        <div className="items-count">{2} Product</div>
                                        <div className="cart-total font-semibold">$26.00</div>
                                    </div>
                                    <Button
                                        to={'/checkout'}
                                        onClick={closeCartModalHandler}
                                        className="w-full block text-center mb-2"
                                    >
                                        Checkout
                                    </Button>
                                    <Button
                                        to={'/cart'}
                                        variant="secondary"
                                        onClick={closeCartModalHandler}
                                        className="w-full block text-center"
                                    >
                                        Go To Cart
                                    </Button>
                                </div>
                            </>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default CartModal;