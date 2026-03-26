/**
 * @typedef {Object} BlogCardProps
 * @property {Object} blog
 */

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

/**
 * @param {BlogCardProps} props
 */

function BlogCard({ blog }) {
    return (
        <div className="blog-card rounded-lg overflow-hidden">
            <Link
                to={`/blogs/${blog.id}`}
                className="blog-image aspect-4/3 bg-grey-100 block overflow-hidden relative"
            >
                <img
                    src={blog.thumbnail}
                    alt="Blog Image"
                    className="transition-transform duration-700 ease-out will-change-transform sm:hover:scale-105 w-full h-full object-cover"
                />
                {/* Date */}
                <span className="blog-published-date absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded">
                    {
                        new Date(blog.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })
                    }
                </span>
            </Link>
            <div className="blog-content p-3 md:p-5 border border-grey-100">
                <h3 className="blog-title text-lg font-semibold mb-2 line-clamp-3">{blog.title}</h3>
                <Link
                    to={`/blogs/${blog.id}`}
                    className="flex items-center gap-2 w-fit text-primary sm:hover:text-hard-primary transition-colors font-semibold"
                >
                    <span>Read More</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </div>
    )
}

export default BlogCard;