import { useQuery } from "@tanstack/react-query";
import { GET } from "@utils/api";

function Testimonials() {

    const { data, isLoading } = useQuery({
        queryKey: ['testimonials'],
        queryFn: () => GET('/testimonials?pagination[limit]=6&populate[avatar]=true'),
        refetchOnWindowFocus: false
    });

    console.log(isLoading ? "Testimonials Loading..." : data ? data : "No data");

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                Testimonials
            </div>
        </section>
    )
}

export default Testimonials;