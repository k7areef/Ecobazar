/**
 * @typedef {Object} ProductCardProps
 * @prop {object} product
 * @prop {string} [className]
 */

import React from "react";
import { useCart } from "@contexts/providers/CartContext";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag, faSpinner, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

/**
 * @param {ProductCardProps} props
 */

function ProductCard({ product, className }) {

    const { cart, addToCart, removeFromCart } = useCart();

    const [isLoading, setIsLoading] = React.useState(false);

    const inCart = React.useMemo(() => {
        return (cart || []).find(c => c.product_id === product.id);
    }, [cart, product]);

    const handleAddToCart = React.useCallback(async () => {
        if (isLoading) return;
        setIsLoading(true);
        if (inCart) {
            await removeFromCart({ productId: product.id });
        } else {
            await addToCart({ productId: product.id });
        }
        setIsLoading(false);
    }, [isLoading, inCart, removeFromCart, addToCart, product]);

    return (
        <div className={`product-card border border-grey-100 transition sm:hover:border-primary sm:hover:shadow/40 sm:hover:shadow-primary rounded-lg group relative overflow-hidden ${className}`}>
            {/* Product Image */}
            <Link
                to={`/shop/${product.title}/${product.id}`}
                className="pro-image aspect-square block"
            >
                <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
            </Link>
            {/* Product Info */}
            <div className="pro-info p-3 md:p-5 flex items-center justify-baseline gap-3">
                {/* Info */}
                <div className="info w-full">
                    <Link
                        to={`/shop/${product.title}/${product.id}`}
                        className="block mb-0.5 w-fit"
                    >
                        <h3 className="pro-title line-clamp-1 font-medium sm:hover:underline sm:group-hover:text-primary transition-colors duration-200">{product.title}</h3>
                    </Link>
                    <span className="pro-price font-semibold text-lg">${product.price}</span>
                    <ul className="flex items-center gap-1 mt-1">
                        {
                            Array.from({ length: 5 }).map((_, index) => (<li key={index}>
                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                            </li>))
                        }
                    </ul>
                </div>
                {/* Add to Cart */}
                <button
                    type="button"
                    onClick={handleAddToCart}
                    title={inCart ? "Added to Cart" : "Add to Cart"}
                    aria-label={inCart ? "Added to Cart" : "Add to Cart"}
                    className={`shrink-0 w-12 h-12 rounded-full ${inCart ? "bg-primary text-white" : "bg-grey-50 sm:hover:bg-primary sm:hover:text-white"} flex items-center justify-center text-xl transition-colors duration-300 ease-in-out`}
                >
                    <FontAwesomeIcon icon={isLoading ? faSpinner : faShoppingBag} {...(isLoading ? { className: "animate-spin" } : {})} />
                    <span className="sr-only">Add to Cart</span>
                </button>
            </div>
            {/* Floating Actions */}
            <div className="floating-actions flex flex-col gap-2 transition duration-200 absolute z-10 right-3 top-3 translate-x-full opacity-0 sm:group-hover:opacity-100 sm:group-hover:translate-0">
                {/* Add to Whishlist */}
                <button
                    type="button"
                    title="Add to Whishlist"
                    aria-label="Add to Whishlist"
                    className="text-xl w-12 h-12 rounded-full flex items-center justify-center border border-primary bg-white"
                >
                    <FontAwesomeIcon icon={faHeart} />
                    <span className="sr-only">Add to Whishlist</span>
                </button>
                {/* Quick View */}
                <button
                    type="button"
                    title="Quick View"
                    aria-label="Quick View"
                    className="text-xl w-12 h-12 rounded-full flex items-center justify-center border border-primary bg-white"
                >
                    <FontAwesomeIcon icon={faEye} />
                    <span className="sr-only">Quick View</span>
                </button>
            </div>
        </div>
    )
}

export default ProductCard;