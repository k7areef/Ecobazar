/**
 * @typedef {Object} ProductsGridProps
 * @prop {boolean} isLoading
 * @prop {object[]} products
 * @prop {number} [limit]
 * @prop {string} [className]
 */

import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

/**
 * @param {ProductsGridProps} props
 */

function ProductsGrid({ isLoading = true, products = [], limit = 4, className }) {
    return (
        <div className={`products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 ${className}`}>
            {
                isLoading ? (
                    Array.from({ length: limit }).map((_, index) => <ProductCardSkeleton key={index} />)
                ) : (
                    products.map((product, index) => (<ProductCard product={product} key={index} />))
                )
            }
        </div>
    )
}

export default ProductsGrid;