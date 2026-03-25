import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";

function CompanyLogo() {

    const { data, isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: async () => await supabase.from("brands").select("*").limit(6).then(res => res.data),
        refetchOnWindowFocus: false
    });

    console.log(isLoading ? "Brands Loading..." : data ? data : "No data");

    return (
        <section className="company-logo-section py-5 md:py-10" id="companyLogo">
            <div className="container">
                <div className="brands grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
                    {
                        data.map((brand, index) => (<div className="brand-card grayscale-100 transition-all duration-200 sm:hover:grayscale-0" key={index}>
                            <img
                                src={brand.image_url}
                                alt={brand.name}
                            />
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default CompanyLogo;