import { useQuery } from "@tanstack/react-query";
import SectionHeader from "./shared/SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { GET_CATEGORIES } from "@utils/api";

function TopCategories() {

    const LIMIT = 6;

    const { data, isLoading } = useQuery({
        queryKey: ['top-categories'],
        queryFn: () => GET_CATEGORIES({ limit: LIMIT, byImage: true }).then(res => res.data),
        refetchOnWindowFocus: false
    });

    console.log(isLoading ? "Top Categories Loading..." : data ? data : "No data");

    return (
        <section className="top-categories-section py-5 md:py-10 bg-[#f5f7f5]" id="topCategories">
            <div className="container">
                {/* Header */}
                <SectionHeader
                    title="Shop by Top Categories"
                >
                    <Link className="flex items-center gap-2 text-primary font-medium" to={'/shop'}>
                        <span>View All</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </SectionHeader>
                {/* Categories */}
                <div className="categoreis-grid grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">
                    {
                        isLoading ? (
                            Array.from({ length: LIMIT }).map((_, index) => <div className="category-card-skeleton" key={index}>
                                Category Skeleton
                            </div>)
                        ) : (
                            data.map((category, index) => (<Link to={'/shop'} className="category-card p-3 block bg-white border border-grey-100 rounded-lg transition-colors duration-200 sm:hover:border-primary sm:hover:shadow/30 sm:hover:shadow-primary group" key={index}>
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
                            </Link>))
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default TopCategories;