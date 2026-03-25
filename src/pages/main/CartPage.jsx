import Button from "@components/UI/Button";
import { useCart } from "@contexts/providers/CartContext";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useChangeTitle from "@hooks/useChangeTitle";
import React from "react";

function CartPage() {
    useChangeTitle({ title: 'Cart' });

    const { isInitialLoading, cart, cartTotal, shipping } = useCart();

    return (
        <div className="cart-page py-5 md:py-10">
            <div className="container">
                <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">My Shopping Cart</h2>
                <div className="content-wrapper grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-5 md:mt-10 items-start">
                    {/* Cart Items */}
                    <div className="cart-items border border-grey-100 rounded-lg md:col-span-2">
                        Cart Items
                    </div>
                    {/* Cart Summary */}
                    <div className="cart-summary border border-grey-100 rounded-lg p-3 md:p-5">
                        <h3 className="font-medium text-lg mb-3">Cart Total</h3>
                        <div className="items-group *:not-last-of-type:border-b *:not-last-of-type:border-b-grey-100 *:py-2 *:flex *:items-center *:justify-between *:[&>span]:first-of-type:text-grey-700 *:[&>span]:last-of-type:font-semibold">
                            {/* Subtotal */}
                            <div className="subtotal">
                                <span>Subtotal:</span>
                                <span>
                                    {
                                        isInitialLoading ? (
                                            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                        ) : (
                                            <React.Fragment>
                                                ${cartTotal}
                                            </React.Fragment>
                                        )
                                    }
                                </span>
                            </div>
                            {/* Shipping */}
                            <div className="shipping">
                                <span>Shipping:</span>
                                <span>
                                    {
                                        isInitialLoading ? (
                                            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                        ) : (
                                            <React.Fragment>
                                                {shipping === 0 ? "Free" : "$" + shipping}
                                            </React.Fragment>
                                        )
                                    }
                                </span>
                            </div>
                            {/* Total */}
                            <div className="total">
                                <span>Total:</span>
                                <span>
                                    {
                                        isInitialLoading ? (
                                            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                        ) : (
                                            <React.Fragment>
                                                ${cartTotal + shipping}
                                            </React.Fragment>
                                        )
                                    }
                                </span>
                            </div>
                        </div>
                        {/* Checkout Button */}
                        <Button
                            to={'/checkout'}
                            disabled={isInitialLoading || cart?.length === 0}
                            className="rounded-full block text-center mt-5"
                        >
                            Proceed to checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;