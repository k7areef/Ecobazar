import CartSummary from "@components/common/CartSummary";
import Button from "@components/UI/Button";
import { useCart } from "@contexts/CartContext";
import { Link, Navigate } from "react-router-dom";

function CartPage() {
    const { cart, isLoading } = useCart();

    return (
        <div className="cart-page py-5 md:py-10">
            <div className="container">
                <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5 md:mb-10 text-center">My Shopping Cart</h2>
                {
                    cart?.items?.length === 0 ? (
                        <div className="flex items-center justify-center gap-1">
                            <p className="text-gray-600">Your cart is empty</p>
                            <Link to={'/shop'} className="underline font-semibold transition sm:hover:text-primary">SHOPPING</Link>
                        </div>
                    ) : (
                        <div className="content-grid grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
                            {/* Cart Items */}
                            <div className="cart-items lg:col-span-2 border border-gray-100 rounded-md overflow-hidden">
                                {/* wrapper for horizontal scroll */}
                                <div className="overflow-x-auto">
                                    <div className="min-w-175">
                                        {/* Header */}
                                        <div className="head p-5 border-b border-b-gray-100 uppercase flex items-center text-gray-500 font-medium bg-gray-50">
                                            <div className="product w-2/5 shrink-0">Product</div>
                                            <div className="price w-1/5 text-center">Price</div>
                                            <div className="quantity w-1/5 text-center">Quantity</div>
                                            <div className="subtotal w-1/5 text-right">Subtotal</div>
                                        </div>
                                        {/* Body */}
                                        <div className="body p-5">
                                            {cart?.items?.map((cartItem, index) => (
                                                <div
                                                    className="body-row py-4 flex items-center border-b border-b-gray-100 last:border-0 font-medium"
                                                    key={index}
                                                >
                                                    {/* Product Info */}
                                                    <div className="product-info w-2/5 shrink-0 flex items-center gap-4">
                                                        <div className="product-image w-20 h-20 shrink-0 bg-gray-50 rounded">
                                                            <img
                                                                src={`http://localhost:1337${cartItem.product?.image?.url}`}
                                                                alt={cartItem.product?.title}
                                                                className="w-full h-full object-contain"
                                                            />
                                                        </div>
                                                        <Link
                                                            to={`/shop/${cartItem.product?.slug}/${cartItem.product?.documentId}/detail`}
                                                            className="transition hover:text-primary hover:underline line-clamp-2 pr-4"
                                                        >
                                                            {cartItem.product?.title}
                                                        </Link>
                                                    </div>

                                                    {/* Price */}
                                                    <div className="product-price w-1/5 text-center">
                                                        ${cartItem.product?.price}
                                                    </div>

                                                    {/* Quantity */}
                                                    <div className="product-quantity w-1/5 text-center">
                                                        {cartItem.quantity}
                                                    </div>

                                                    {/* Subtotal */}
                                                    <div className="product-subtotal w-1/5 text-right text-primary">
                                                        ${(cartItem.product?.price) * (cartItem.quantity)}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Cart Total */}
                            <div className="cart-total border border-gray-100 rounded-md p-5 lg:row-span-3">
                                <h3 className="font-medium text-lg sm:text-xl md:text-2xl">Cart Total</h3>
                                <CartSummary className="mb-5" />
                                <Button
                                    to={'/checkout'}
                                    disabled={isLoading}
                                    className="block text-center"
                                >
                                    Proceed to checkout
                                </Button>
                            </div>
                            {/* Coupon Code */}
                            <div className="coupon-code lg:col-span-2 border border-gray-100 rounded-md p-5 flex md:items-center gap-3 max-md:flex-col">
                                <h3 className="font-medium text-lg sm:text-xl shrink-0">Coupon Code</h3>
                                <form onSubmit={e => e.preventDefault()} className="w-full rounded-md p-3 sm:p-0 sm:rounded-full border border-gray-100 sm:relative">
                                    <input
                                        required
                                        type="text"
                                        id="couponCode"
                                        name="couponCode"
                                        placeholder="Enter code"
                                        className="w-full py-3 px-5 rounded-md sm:rounded-full bg-transparent max-sm:border max-md:border-gray-100 mb-2"
                                    />
                                    <Button
                                        type="submit"
                                        variant="dark"
                                        className="sm:absolute sm:right-0 sm:h-full max-sm:w-full py-3"
                                    >
                                        Apply Coupon
                                    </Button>
                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CartPage;