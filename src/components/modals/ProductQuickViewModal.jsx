import React from "react";
import BaseModal from "../UI/BaseModal";
import { useQuickViewModal } from "../../contexts/providers/QuickViewModalContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faMinus, faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Button from "@components/UI/Button";
import { useCart } from "@contexts/providers/CartContext";
import useInCart from "@hooks/useInCart";

function ProductQuickViewModal() {

    const { cart, addToCart } = useCart();
    const { isOpen, productId, closeModal } = useQuickViewModal();
    const [isAddToCartLoading, setIsAddToCartLoading] = React.useState(false);
    const [quantity, setQuantity] = React.useState(1);

    const { data, isLoading: isDataLoading } = useQuery({
        queryKey: [`product_${productId}`, productId],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('products')
                .select('*, brand:brands(name, image_url), category:product_categories(name), tags:products_product_tags(tag:product_tags(name))')
                .eq('id', productId)
                .single();
            if (error) throw error;
            return data;
        },
        enabled: (!!productId && isOpen),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    // Check if product is in cart
    const { inCart } = useInCart(data?.id);

    React.useEffect(() => {
        if (!isOpen || !productId) return;
        setQuantity(cart.find(c => c.product_id === productId)?.quantity || 1);
    }, [isOpen, productId, cart]);

    const handleAddToCart = React.useCallback(async () => {
        if (inCart || isAddToCartLoading) return;
        setIsAddToCartLoading(true);
        await addToCart({ productId: data.id, quantity });
        setIsAddToCartLoading(false);
    }, [isAddToCartLoading, inCart, addToCart, data, quantity]);

    return (
        <BaseModal isOpen={isOpen}>
            <div
                onClick={closeModal}
                className="product-qucik-view-modal h-screen flex items-center"
            >
                <div className="container">
                    {/* Content Wrapper */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="content-wrapper bg-white rounded-lg p-5 grid md:grid-cols-2 gap-5"
                    >
                        {/* Product Image */}
                        <div className="product-image aspect-square rounded-md bg-grey-50">
                            {
                                isDataLoading ? (
                                    <div className="w-full h-full flex items-center justify-center gap-2 text-primary">
                                        <FontAwesomeIcon icon={faSpinner} className="animate-spin text-2xl" />
                                        <span className="ml-2">Loading...</span>
                                    </div>
                                ) : (
                                    <img
                                        src={data?.image_url || ''}
                                        alt="Product Image"
                                        className="w-full h-full object-cover"
                                    />
                                )
                            }
                        </div>
                        {/* Product Details */}
                        <div className="product-details">
                            {/* Main Details */}
                            <div className="main-details">
                                {
                                    isDataLoading ? (
                                        <div className="h-8 bg-grey-100 animate-pulse rounded-sm w-3/4 mb-2"></div>
                                    ) : (
                                        <h2 className="text-2xl font-bold mb-2">{data?.title}</h2>
                                    )
                                }
                            </div>
                            {/* Separator */}
                            <hr className="my-5 border-grey-100" />
                            {/* Product Description */}
                            <div className="product-description">
                                {/* Header */}
                                <div className="product-description-header flex items-center justify-between mb-3">
                                    {/* Product Brand */}
                                    <div className="product-brand flex items-center gap-2">
                                        <span>Brand:</span>
                                        {
                                            data?.brand?.image_url ?
                                                (
                                                    <div className="brand-image w-14 h-14 p-2 border border-grey-100 rounded-md">
                                                        {
                                                            isDataLoading ? (
                                                                <div className="w-full h-full bg-grey-100 animate-pulse rounded-md"></div>
                                                            ) : (
                                                                <img
                                                                    src={data?.brand?.image_url || ''}
                                                                    alt={data?.brand?.name || "Brand Logo"}
                                                                    title={data?.brand?.name || "Brand Logo"}
                                                                    className="w-full h-full object-contain"
                                                                />
                                                            )
                                                        }
                                                    </div>
                                                ) : (<p>No brand information</p>)
                                        }

                                    </div>
                                    {/* Share on Social Media */}
                                    <div className="share-on-social-media">
                                        Share on Social Media
                                    </div>
                                </div>
                                {/* Description Text */}
                                <p>{data?.description || "No description available"}</p>
                            </div>
                            {/* Separator */}
                            <hr className="my-5 border-grey-100" />
                            {/* Product Actions */}
                            <div className="product-actions flex items-center max-sm:items-end gap-3">
                                {/* Add to Cart */}
                                <div className="add-to-cart flex-1 flex sm:items-center gap-3 max-sm:flex-col">
                                    {/* Quantity Counter */}
                                    <div className="qunatity-counter p-2 rounded-full border border-grey-100 flex items-center justify-center gap-2">
                                        {/* Minus */}
                                        <button
                                            title="Decrease Quantity"
                                            aria-label="Decrease Quantity"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            disabled={isAddToCartLoading || isDataLoading || inCart}
                                            className="bg-grey-50 sm:hover:bg-grey-100 rounded-full w-8 h-8 flex items-center justify-center"
                                        >
                                            <FontAwesomeIcon icon={faMinus} />
                                            <span className="sr-only">Decrease Quantity</span>
                                        </button>
                                        {/* Current */}
                                        <div className="current w-8 h-8 rounded-full flex items-center justify-center font-medium">
                                            {
                                                isDataLoading ? (
                                                    <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                                ) : (quantity)
                                            }
                                        </div>
                                        {/* Pluse */}
                                        <button
                                            title="Increase Quantity"
                                            aria-label="Increase Quantity"
                                            onClick={() => setQuantity(quantity + 1)}
                                            disabled={isAddToCartLoading || isDataLoading || inCart}
                                            className="bg-grey-50 sm:hover:bg-grey-100 rounded-full w-8 h-8 flex items-center justify-center"
                                        >
                                            <FontAwesomeIcon icon={faPlus} />
                                            <span className="sr-only">Increase Quantity</span>
                                        </button>
                                    </div>
                                    {/* Add to Cart Button */}
                                    <Button
                                        onClick={handleAddToCart}
                                        variant={inCart ? "secondary" : "primary"}
                                        title={inCart ? "Added to Cart" : "Add to Cart"}
                                        aria-label={inCart ? "Added to Cart" : "Add to Cart"}
                                        className="rounded-full flex-1 flex items-center justify-center gap-3"
                                    >
                                        <span>{inCart ? "Added to Cart" : "Add to Cart"}</span>
                                        <FontAwesomeIcon icon={isAddToCartLoading ? faSpinner : faCartShopping} {...(isAddToCartLoading ? { className: "animate-spin" } : {})} />
                                    </Button>
                                </div>
                                {/* Add to Wishlist */}
                                <button
                                    title="Add to Wishlist"
                                    aria-label="Add to Wishlist"
                                    className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-hard-primary sm:hover:bg-primary sm:hover:text-white text-lg"
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span className="sr-only">Add to Wishlist</span>
                                </button>
                            </div>
                            {/* Separator */}
                            <hr className="my-5 border-grey-100" />
                            {/* Product Tags */}
                            <div className="product-tags">
                                {/* Product Category */}
                                <div className="product-category font-medium mb-3">
                                    <span>Category: </span>
                                    <span className="text-grey-600 sm:hover:text-inherit sm:hover:underline">{data?.category?.name || 'No category'}</span>
                                </div>
                                {/* Tags */}
                                <div className="product-tags flex items-center gap-1">
                                    <span>Tags: </span>
                                    <div className="tags flex items-center gap-1 text-nowrap flex-wrap">
                                        {
                                            data?.tags?.length > 0 ?
                                                data?.tags?.map((tag, index) => (
                                                    <span key={index} className="text-grey-600 sm:hover:text-inherit sm:hover:underline">{tag?.tag?.name}</span>
                                                )) : (
                                                    <span className="text-grey-600">No tags</span>
                                                )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseModal>
    )
}

export default ProductQuickViewModal;