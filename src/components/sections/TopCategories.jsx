import { useQuery } from "@tanstack/react-query";
import SectionHeader from "./shared/SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { GET_CATEGORIES } from "@utils/api";
import CategoryCard from "@components/categories/CategoryCard";
import CategoryCardSkeleton from "@components/categories/CategoryCardSkeleton";

function TopCategories() {

    const LIMIT = 6;

    const { data, isLoading } = useQuery({
        queryKey: ['top-categories'],
        queryFn: () => GET_CATEGORIES({ limit: LIMIT, byImage: true }).then(res => res.data),
        refetchOnWindowFocus: false
    });

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
                            Array.from({ length: LIMIT }).map((_, index) => <CategoryCardSkeleton key={index} />)
                        ) : (
                            data.map((category, index) => (<CategoryCard category={category} key={index} />))
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default TopCategories;