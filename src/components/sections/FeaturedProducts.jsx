import { useQuery } from "@tanstack/react-query";
import { GET } from "@utils/api";

function FeaturedProducts() {

    const { data, isLoading } = useQuery({
        queryKey: ['featured-products'],
        queryFn: () => GET('/products?pagination[limit]=4&populate[thumbnail]=true&filters[is_featured][$eq]=true'),
        refetchOnWindowFocus: false
    });

    console.log(isLoading ? "Featured Products Loading..." : data ? data : "No data")

    return (
        <section className="featured-products-section" id="featuredProducts">
            <div className="container">
                Featured Products
            </div>
        </section>
    )
}

export default FeaturedProducts;