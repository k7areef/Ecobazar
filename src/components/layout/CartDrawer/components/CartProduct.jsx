/**
 * @typedef {Object} CartProductProps
 * @prop {object} cart
 */

import { useCart } from "@contexts/providers/CartContext";
import { faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

/**
 * @param {CartProductProps} props
 */

function CartProduct({ cart }) {

    const { removeFromCart } = useCart();

    const [isLoading, setIsLoading] = React.useState(false);

    const handleRemoveFromCart = React.useCallback(async () => {
        setIsLoading(true);
        await removeFromCart({ productId: cart?.product?.id });
        setIsLoading(false);
    }, [setIsLoading, removeFromCart, cart]);

    return (
        <div className="cart-product py-3 flex items-center gap-5 not-last-of-type:border-b not-last-of-type:border-b-grey-100">
            {/* Product Image */}
            <div className="cart-pro-image w-20 h-20">
                <img
                    src={cart?.product?.image_url}
                    alt={cart?.product?.title}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Product Info */}
            <div className="cart-pro-info flex-1">
                <h3 className="pro-title md-2">{cart?.product?.title}</h3>
                <span className="pro-price font-semibold">{cart?.quantity} x ${cart?.product?.price}</span>
            </div>
            {/* Remove From Cart */}
            <button
                title="Remove From Cart"
                aria-label="Remove From Cart"
                onClick={handleRemoveFromCart}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-grey-100 transition duration-200 ease-out sm:hover:bg-danger sm:hover:border-danger sm:hover:text-white"
            >
                <FontAwesomeIcon icon={isLoading ? faSpinner : faXmark} {...(isLoading ? { className: "animate-spin" } : {})} />
                <span className="sr-only">Remove From Cart</span>
            </button>
        </div>
    )
}

export default CartProduct;