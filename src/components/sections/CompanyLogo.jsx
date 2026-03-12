import { useQuery } from "@tanstack/react-query";
import { GET } from "@utils/api";

function CompanyLogo() {

    const { data, isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: () => GET('/brands?pagination[limit]=5&populate[logo]=true'),
        refetchOnWindowFocus: false
    });

    console.log(isLoading ? "Brands Loading..." : data ? data : "No data");

    return (
        <section className="company-logo-section" id="companyLogo">
            <div className="container">
                Company Logo
            </div>
        </section>
    )
}

export default CompanyLogo;