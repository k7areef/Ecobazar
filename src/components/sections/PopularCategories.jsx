import { useAuth } from "@contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { GET_CATEGORIES } from "@utils/api";
import SectionHeader from "./shared/SectionHeader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function PopularCategories() {

    const { jwt } = useAuth();

    const { data } = useQuery({
        queryKey: [`POPULAR_CATEGORIES`],
        queryFn: () => GET_CATEGORIES(jwt, "?filters[isPopular][$eq]=true&pagination[limit]=12&populate=image"),
        refetchOnWindowFocus: false
    });

    return (
        <section className="popular-categories py-5 md:py-10" id="popularCategories">
            <div className="container">
                <SectionHeader
                    title="Popular Categories"
                >
                    <Link to={'/'} className="text-primary font-medium flex items-center gap-2">
                        <span>View All</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </SectionHeader>
                <div className="cateogries-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
                    {
                        data?.data?.map((category, index) => (
                            <Link
                                to={`/shop?category=${category.slug}`}
                                className="category block p-3 rounded-md border border-gray-100 text-center transition sm:hover:text-hard-primary sm:hover:border-primary sm:hover:shadow-lg/10 sm:hover:shadow-primary"
                                key={index}
                            >
                                <img
                                    src={category.image.url}
                                    alt={category.name}
                                    className="object-cover rounded-full w-full mb-2"
                                />
                                <span className="text-sm font-medium">{category.name}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PopularCategories;