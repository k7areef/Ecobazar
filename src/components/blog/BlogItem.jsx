/**
 * @typedef {Object} BlogItemProps
 * @property {Object} blog
 */

import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @param {BlogItemProps} props
 */
function BlogItem({ blog }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-grey-100 rounded-md overflow-hidden shrink-0">
                <img src={blog.thumbnail} alt={blog.title} className="w-full h-full object-cover" />
            </div>
            <div>
                <h4 className="font-medium text-sm line-clamp-2">{blog.title}</h4>
                <div className="blog-date flex items-center gap-1 mt-2">
                    <FontAwesomeIcon icon={faCalendar} className="text-primary" />
                    <span className="text-xs text-grey-600">
                        {
                            new Date(blog.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;