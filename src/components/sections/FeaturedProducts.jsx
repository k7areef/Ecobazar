import { useQuery } from "@tanstack/react-query";
import SectionHeader from "./shared/SectionHeader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProductsGrid from "@components/products/ProductsGrid";
import { supabase } from "@utils/supabaseClient";

function FeaturedProducts() {

    const LIMIT = 4;

    const { data, isLoading } = useQuery({
        queryKey: ['featured-products'],
        queryFn: async () => {
            const { data: products } = await supabase
                .from("products")
                .select("*")
                .limit(LIMIT);
            return products;
        },
        refetchOnWindowFocus: false
    });

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