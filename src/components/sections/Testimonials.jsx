import { useQuery } from "@tanstack/react-query";

function Testimonials() {

    const { data, isLoading } = useQuery({
        queryKey: ['testimonials'],
        queryFn: () => { },
        enabled: false,
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