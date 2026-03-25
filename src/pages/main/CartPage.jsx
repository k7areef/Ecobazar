import Button from "@components/UI/Button";
import { useCart } from "@contexts/providers/CartContext";
import { faSpinner, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useChangeTitle from "@hooks/useChangeTitle";
import React from "react";
import { Link } from "react-router-dom";

function CartItemRow({ cartItem, removeFromCart, updateQuantity, formatMoney }) {
    const productId = cartItem?.product?.id ?? cartItem?.product_id;
    const unitPrice = cartItem?.product?.price ?? 0;
    const itemTotal = unitPrice * (cartItem?.quantity ?? 0);

    const [isRemoving, setIsRemoving] = React.useState(false);
    const [isUpdating, setIsUpdating] = React.useState(false);

    const handleRemoveFromCart = React.useCallback(async () => {
        if (isRemoving || !productId) return;
        setIsRemoving(true);
        await removeFromCart({ productId });
        setIsRemoving(false);
    }, [isRemoving, productId, removeFromCart]);

    const handleIncrement = React.useCallback(async () => {
        if (isUpdating || !productId) return;
        setIsUpdating(true);
        await updateQuantity({ productId, quantity: (cartItem?.quantity ?? 0) + 1 });
        setIsUpdating(false);
    }, [isUpdating, productId, updateQuantity, cartItem?.quantity]);

    const handleDecrement = React.useCallback(async () => {
        if (isUpdating || !productId) return;
        const nextQty = (cartItem?.quantity ?? 0) - 1;
        if (nextQty <= 0) return;
        setIsUpdating(true);
        await updateQuantity({ productId, quantity: nextQty });
        setIsUpdating(false);
    }, [isUpdating, productId, updateQuantity, cartItem?.quantity]);

    return (
        <div className="cart-product grid grid-cols-12 items-center gap-4 py-4">
            {/* Product Image */}
            <div className="col-span-3">
                <div className="cart-pro-image w-16 h-16 rounded-lg overflow-hidden bg-grey-50">
                    <img
                        src={cartItem?.product?.image_url}
                        alt={cartItem?.product?.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Product Info */}
            <div className="col-span-4">
                <h4 className="pro-title line-clamp-1 font-medium">{cartItem?.product?.title}</h4>
                <ul className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                        <li key={starIndex} className="text-warning">
                            <FontAwesomeIcon icon={faStar} className="text-xs" />
                        </li>
                    ))}
                </ul>
                <div className="pro-price text-grey-700 text-sm font-medium mt-1">
                    {(cartItem?.quantity ?? 0)} x ${formatMoney(unitPrice)}
                </div>
            </div>

            {/* Quantity */}
            <div className="col-span-2">
                <div className="qty-stepper flex items-center justify-between gap-2 rounded-full border border-grey-100 px-3 py-2">
                    <button
                        type="button"
                        onClick={handleDecrement}
                        disabled={(cartItem?.quantity ?? 0) <= 1 || isUpdating}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-grey-700 disabled:opacity-40 disabled:cursor-not-allowed transition duration-200 ease-out sm:hover:bg-grey-50"
                    >
                        -
                    </button>
                    <span className="font-medium w-6 text-center">
                        {cartItem?.quantity ?? 0}
                    </span>
                    <button
                        type="button"
                        onClick={handleIncrement}
                        disabled={isUpdating}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-grey-700 disabled:opacity-40 disabled:cursor-not-allowed transition duration-200 ease-out sm:hover:bg-grey-50"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Line Total */}
            <div className="col-span-2 text-right font-semibold">
                ${formatMoney(itemTotal)}
            </div>

            {/* Remove */}
            <div className="col-span-1 text-right">
                <button
                    type="button"
                    title="Remove From Cart"
                    aria-label="Remove From Cart"
                    onClick={handleRemoveFromCart}
                    className="w-9 h-9 rounded-full flex items-center justify-center border border-grey-100 transition duration-200 ease-out sm:hover:bg-danger sm:hover:border-danger sm:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isRemoving}
                >
                    <FontAwesomeIcon
                        icon={isRemoving ? faSpinner : faXmark}
                        {...(isRemoving ? { className: "animate-spin" } : {})}
                    />
                    <span className="sr-only">Remove From Cart</span>
                </button>
            </div>
        </div>
    );
}

function CartPage() {
    useChangeTitle({ title: 'Cart' });

    const { isInitialLoading, cart, cartTotal, shipping, removeFromCart, updateQuantity } = useCart();

    const [couponCode, setCouponCode] = React.useState("");
    const [appliedCoupon, setAppliedCoupon] = React.useState(null);
    const [couponError, setCouponError] = React.useState("");

    const handleApplyCoupon = React.useCallback(() => {
        const code = couponCode.trim();
        if (!code) {
            setCouponError("Please enter a coupon code.");
            setAppliedCoupon(null);
            return;
        }
        // UI-only for now (no backend support in this project yet)
        setCouponError("");
        setAppliedCoupon(code);
    }, [couponCode]);

    const formatMoney = React.useCallback((value) => {
        const num = Number(value);
        return Number.isFinite(num) ? num.toFixed(2) : value;
    }, []);

    return (
        <div className="cart-page py-5 md:py-10">
            <div className="container">
                <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">My Shopping Cart</h2>
                <div className="content-wrapper grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-5 md:mt-10 items-start">
                    {/* Cart Items */}
                    <div className="cart-items border border-grey-100 rounded-lg md:col-span-2 p-5">
                        <h3 className="font-medium text-lg mb-4">Cart Totals</h3>

                        {isInitialLoading ? (
                            <div className="m-auto py-10">
                                <FontAwesomeIcon icon={faSpinner} className="animate-spin text-2xl text-primary" />
                            </div>
                        ) : cart?.length > 0 ? (
                            <div className="cart-products divide-y divide-grey-100">
                                {cart.map((cartItem, index) => (
                                    <CartItemRow
                                        // product_id exists on carts table; fallback to index to avoid key warnings
                                        key={cartItem?.product_id ?? index}
                                        cartItem={cartItem}
                                        removeFromCart={removeFromCart}
                                        updateQuantity={updateQuantity}
                                        formatMoney={formatMoney}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="m-auto py-10 text-center">
                                <span className="text-grey-700 font-medium">No data yet</span>{" "}
                                <Link
                                    to="/shop"
                                    className="underline text-primary font-medium"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        )}

                        {/* Coupon Code */}
                        <div className="coupon-code mt-6 pt-6 border-t border-grey-100">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-medium text-sm">Coupon Code</h4>
                                {appliedCoupon && (
                                    <span className="text-grey-700 text-sm">
                                        Applied:{" "}
                                        <span className="text-primary font-semibold">{appliedCoupon}</span>
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-3">
                                <input
                                    required
                                    type="text"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    placeholder="Enter coupon code"
                                    className="w-full p-3 px-5 bg-white border border-grey-100 placeholder:text-grey-600 rounded-full focus:border-primary transition duration-300 ease-in-out"
                                />
                                <Button
                                    type="button"
                                    variant="dark"
                                    onClick={handleApplyCoupon}
                                    disabled={!couponCode.trim()}
                                    className="rounded-full block whitespace-nowrap"
                                >
                                    Apply Coupon
                                </Button>
                            </div>
                            {couponError && <p className="mt-3 text-danger text-sm">{couponError}</p>}
                        </div>
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