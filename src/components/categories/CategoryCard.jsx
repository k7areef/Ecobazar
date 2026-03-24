/**
 * @typedef {Object} CategoryCardProps
 * @prop {object} category
 */

import { Link } from "react-router-dom";

/**
 * @param {CategoryCardProps} props
 */

function CategoryCard({ category, className }) {
    return (
        <Link
            to={'/shop'}
            className={`category-card block p-3 bg-white border border-grey-100 rounded-lg transition-colors duration-200 sm:hover:border-primary sm:hover:shadow/30 sm:hover:shadow-primary group ${className}`}
        >
            {/* Image */}
            <div className="category-image w-20 h-20 mx-auto mb-2">
                <img
                    src={category.image_url}
                    alt="Category Image"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Info */}
            <div className="category-info text-center">
                <h3 className="font-semibold text-lg transition-colors duration-200 sm:group-hover:text-primary">{category.name}</h3>
                <p>165 Product</p>
            </div>
        </Link>
    )
}

export default CategoryCard;