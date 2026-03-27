/**
 * @typedef {Object} BlogSidebarProps
 * @property {string} [className]
 * @property {() => void} [onClose]
 */

import { faFilter, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";
import GalleryImage1 from "@assets/images/gallery/gallery-1.png";
import GalleryImage2 from "@assets/images/gallery/gallery-2.png";
import GalleryImage3 from "@assets/images/gallery/gallery-3.png";
import GalleryImage4 from "@assets/images/gallery/gallery-4.png";
import GalleryImage5 from "@assets/images/gallery/gallery-5.png";
import GalleryImage6 from "@assets/images/gallery/gallery-6.png";
import GalleryImage7 from "@assets/images/gallery/gallery-7.png";
import GalleryImage8 from "@assets/images/gallery/gallery-8.png";
import BlogItem from "./BlogItem";
import BlogItemSkeleton from "./BlogItemSkeleton";
import Button from "@components/UI/Button";

const galleryImages = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8
];

/**
 * @param {BlogSidebarProps} props
 */
function BlogSidebar({ className, onClose }) {

    const LIMIT = 7;

    const { data: categories, isLoading: categoriesLoading } = useQuery({ // Get blog categories
        queryKey: ["blog_categories"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("blog_categories")
                .select("*")
                .limit(LIMIT)
            if (error) throw error;
            return data
        }
    });

    const { data: tags, isLoading: tagsLoading } = useQuery({ // Get blog tags
        queryKey: ["blog_tags"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("blog_tags")
                .select("*")
                .limit(LIMIT)
            if (error) throw error;
            return data
        }
    });

    const { data: recentBlogs, isLoading: recentBlogsLoading } = useQuery({ // Get recentlly blog added
        queryKey: ["recent_blogs"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("blog_posts")
                .select("*")
                .order("created_at", { ascending: false })
                .limit(3)
            if (error) throw error;
            return data
        }
    });

    return (
        <aside onClick={e => e.stopPropagation()} className={`w-80 md:w-120 bg-white${className ? ` ${className}` : ''}`}>
            {/* Search */}
            <div className="blog-search">
                <form className="relative">
                    <label htmlFor="blog-search" className="absolute top-1/2 left-3 -translate-y-1/2">
                        <FontAwesomeIcon icon={faSearch} />
                        <span className="sr-only">Search</span>
                    </label>
                    <input
                        id="blog-search"
                        type="text"
                        name="blog-search"
                        placeholder="Search..."
                        className="w-full p-3 pl-10 rounded-md border border-grey-100 transition-colors focus:border-primary"
                    />
                </form>
            </div>
            {/* Separator */}
            <hr className="my-3 border-grey-100" />
            {/* Categories */}
            <div className="blog-categories">
                <h3 className="font-medium text-lg sm:text-xl mb-3">Top Categories</h3>
                <ul className="space-y-2">
                    {categoriesLoading ? (
                        Array.from({ length: LIMIT }).map((_, index) => (
                            <li key={index} className="flex items-center justify-between">
                                <div className="bg-grey-100 animate-pulse h-4 w-30 rounded-sm"></div>
                                <span className="category-count text-grey-600">(0)</span>
                            </li>
                        ))
                    ) : (
                        categories.map((category, index) => (<li key={index} className="flex items-center justify-between">
                            <span className="category-name">{category.name}</span>
                            <span className="category-count text-grey-600">({134})</span>
                        </li>))
                    )}
                </ul>
            </div>
            {/* Separator */}
            <hr className="my-3 border-grey-100" />
            {/* Popular Tags */}
            <div className="blog-popular-tags">
                <h3 className="font-medium text-lg sm:text-xl mb-3">Popular Tags</h3>
                <div className="flex items-center gap-2 flex-wrap text-nowrap">
                    {tagsLoading ? (
                        Array.from({ length: LIMIT }).map((_, index) => (
                            <div key={index} className="px-4 py-2 bg-grey-100 rounded-full text-sm animate-pulse">
                                <div className="h-4 w-16"></div>
                            </div>
                        ))
                    ) : (
                        tags.map((tag, index) => (<div key={index}>
                            <button
                                type="button"
                                title={tag.name}
                                aria-label={`Filter by tag: ${tag.name}`}
                                className="px-4 py-2 bg-grey-100 rounded-full text-sm sm:hover:bg-primary sm:hover:text-white transition"
                            >
                                {tag.name}
                            </button>
                        </div>))
                    )}
                </div>
            </div>
            {/* Separator */}
            <hr className="my-3 border-grey-100" />
            {/* Our Gallery */}
            <div className="blog-our-gallery">
                <h3 className="font-medium text-lg sm:text-xl mb-3">Our Gallery</h3>
                <div className="grid grid-cols-4 gap-2">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="aspect-square bg-grey-100 rounded-md overflow-hidden">
                            <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
            {/* Separator */}
            <hr className="my-3 border-grey-100" />
            {/* Recently Added */}
            <div className="blog-recently-added max-lg:pb-3">
                <h3 className="font-medium text-lg sm:text-xl mb-3">Recently Added</h3>
                <div className="space-y-3">
                    {recentBlogsLoading ? (
                        Array.from({ length: 3 }, (_, index) => <BlogItemSkeleton key={index} />)
                    ) : (
                        recentBlogs.map((blog, index) => (<BlogItem key={index} blog={blog} />))
                    )}
                </div>
            </div>
            {/* Actions */}
            <div className="lg:hidden pb-3 py-5 sticky bottom-0 z-10 bg-white flex flex-col gap-3 border-t border-grey-100">
                <Button
                    title="Apply Filter"
                    aria-label="Apply Filter"
                    className="rounded-full flex items-center justify-center gap-2 flex-1"
                >
                    <FontAwesomeIcon icon={faFilter} />
                    <span>Apply Filter</span>
                </Button>
                <Button
                    title="Close"
                    onClick={onClose}
                    variant="secondary"
                    className="rounded-full flex items-center justify-center gap-2 flex-1"
                >
                    <FontAwesomeIcon icon={faXmark} />
                    <span>Close</span>
                </Button>
            </div>
        </aside>
    )
}

export default BlogSidebar;