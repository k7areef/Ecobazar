import { useQuery } from "@tanstack/react-query";

function CompanyLogo() {

    const { data, isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: () => { },
        enabled: false,
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