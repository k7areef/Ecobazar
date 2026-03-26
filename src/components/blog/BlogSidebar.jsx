import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BlogSidebar() {
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
                <ul>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                </ul>
            </div>
            {/* Separator */}
            <hr className="my-3 border-grey-100" />
            {/* Popular Tags */}
            <div className="blog-popular-tags">
                <h3 className="font-medium text-lg sm:text-xl mb-3">Popular Tags</h3>
                <ul>
                    <li>Tag 1</li>
                    <li>Tag 2</li>
                    <li>Tag 3</li>
                </ul>
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