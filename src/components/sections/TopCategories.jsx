import { useQuery } from "@tanstack/react-query";
import { GET } from "@utils/api";

function TopCategories() {

    const { data, isLoading } = useQuery({
        queryKey: ['top-categories'],
        queryFn: () => GET('/categories?pagination[limit]=6&populate[image]=true&filters[is_top][$eq]=true'),
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