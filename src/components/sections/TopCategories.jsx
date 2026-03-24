import { useQuery } from "@tanstack/react-query";

function TopCategories() {

    const { data, isLoading } = useQuery({
        queryKey: ['top-categories'],
        queryFn: () => { },
        enabled: false,
        refetchOnWindowFocus: false
    });

    console.log(isLoading ? "Top Categories Loading..." : data ? data : "No data");

    return (
        <section className="top-categories-section" id="topCategories">
            <div className="container">
                Top Categories
            </div>
        </section>
    )
}

export default TopCategories;