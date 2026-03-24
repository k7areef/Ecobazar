import { useQuery } from "@tanstack/react-query";
import SectionHeader from "./shared/SectionHeader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { GET_PRODUCTS } from "@utils/api";

function FeaturedProducts() {

    const { data, isLoading } = useQuery({
        queryKey: ['featured-products'],
        queryFn: () => GET_PRODUCTS({ limit: 4 }).then(res => res.data),
        refetchOnWindowFocus: false
    });

    console.log(isLoading ? "Featured Products Loading..." : data ? data : "No data")

    return (
        <section className="featured-products-section py-5 md:py-10" id="featuredProducts">
            <div className="container">
                {/* Header */}
                <SectionHeader
                    title="Featured Products"
                >
                    <Link className="flex items-center gap-2 text-primary font-medium" to={'/shop'}>
                        <span>View All</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </SectionHeader>
                {/* Products */}
                <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                    {
                        isLoading ? (
                            <>Loading</>
                        ) : (
                            data.map((product, index) => (<div className="product-card" key={index}>
                                Product {index + 1}
                            </div>))
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts;