import { useQuery } from "@tanstack/react-query";

function FeaturedProducts() {

    const { data, isLoading } = useQuery({
        queryKey: ['featured-products'],
        queryFn: () => { },
        enabled: false,
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