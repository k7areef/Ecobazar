/**
 * @typedef {Object} ProductCardProps
 * @prop {object} product
 * @prop {string} [className]
 */

/**
 * @param {ProductCardProps} props
 */

function ProductCard({ product, className }) {
    return (
        <div className={`product-card ${className}`}>
            {product.id}
        </div>
    )
}

export default ProductCard;