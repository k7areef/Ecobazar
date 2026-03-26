import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";

function BlogSidebar() {

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

    return (
        <aside className="w-120 max-lg:hidden">
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
                                <span className="category-name">Loading...</span>
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
                            <div key={index} className="px-4 py-2 bg-grey-100 rounded-full text-sm animate-pulse">Loading...</div>
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
                <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square bg-grey-100 rounded-md overflow-hidden"></div>
                    <div className="aspect-square bg-grey-100 rounded-md overflow-hidden"></div>
                    <div className="aspect-square bg-grey-100 rounded-md overflow-hidden"></div>
                    <div className="aspect-square bg-grey-100 rounded-md overflow-hidden"></div>
                    <div className="aspect-square bg-grey-100 rounded-md overflow-hidden"></div>
                    <div className="aspect-square bg-grey-100 rounded-md overflow-hidden"></div>
                </div>
            </div>
            {/* Separator */}
            <hr className="my-3 border-grey-100" />
            {/* Recently Added */}
            <div className="blog-recently-added">
                <h3 className="font-medium text-lg sm:text-xl mb-3">Recently Added</h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-grey-100 rounded-md overflow-hidden"></div>
                        <div>
                            <h4 className="font-medium text-sm">Post Title 1</h4>
                            <p className="text-xs text-grey-600">Date</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-grey-100 rounded-md overflow-hidden"></div>
                        <div>
                            <h4 className="font-medium text-sm">Post Title 2</h4>
                            <p className="text-xs text-grey-600">Date</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-grey-100 rounded-md overflow-hidden"></div>
                        <div>
                            <h4 className="font-medium text-sm">Post Title 3</h4>
                            <p className="text-xs text-grey-600">Date</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default BlogSidebar;