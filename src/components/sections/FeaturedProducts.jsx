import { useQuery } from "@tanstack/react-query";
import SectionHeader from "./shared/SectionHeader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { GET_PRODUCTS } from "@utils/api";
import ProductsGrid from "@components/products/ProductsGrid";

function FeaturedProducts() {

    const LIMIT = 4;

    const { data, isLoading } = useQuery({
        queryKey: ['featured-products'],
        queryFn: () => GET_PRODUCTS({ limit: LIMIT }).then(res => res.data),
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
                <ProductsGrid isLoading={isLoading} products={data} limit={LIMIT} />
            </div>
        </section>
    )
}

export default FeaturedProducts;