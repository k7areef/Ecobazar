import Categories from "./SidebarComponents/Categories";
import PriceRange from "./SidebarComponents/PriceRange";
import Rating from "./SidebarComponents/Rating";
import PopularTags from "./SidebarComponents/PopularTags";

function ProductsSidebar() {
    return (
        <aside className="sidebar w-80 max-lg:hidden">
            {/* Categories */}
            <Categories />
            {/* Separator */}
            <hr className="my-3 border-grey-100" />
            {/* Price Range */}
            <PriceRange />
            {/* Separator */}
            <hr className="my-3 border-grey-100" />
            {/* Rating */}
            <Rating />
            {/* Separator */}
            <hr className="my-3 border-grey-100" />
            {/* Popular Tags */}
            <PopularTags />
        </aside>
    )
}

export default ProductsSidebar;