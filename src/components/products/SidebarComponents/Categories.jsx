import RadioBox from "@components/UI/RadioBox";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function Categories() {

    const [isOpen, setIsOpen] = React.useState(true);

    const LIMIT = 7;

    const [searchParams] = useSearchParams();
    const CATEGORY_PARAM = searchParams.get("category") || "all";

    const { data, isLoading } = useQuery({
        queryKey: ["product_categories"],
        queryFn: async () => {
            const [categoriesRes, totalCountRes] = await Promise.all([
                supabase
                    .from("product_categories")
                    .select("*, product_count:products(count)")
                    .limit(LIMIT),
                supabase
                    .from("products")
                    .select("*", { count: "exact", head: true })
            ]);

            if (categoriesRes.error) throw categoriesRes.error;
            if (totalCountRes.error) throw totalCountRes.error;

            const categories = categoriesRes.data.map(c => ({
                ...c,
                product_count: c.product_count?.[0]?.count || 0
            }));

            return {
                categories,
                total_count: totalCountRes.count || 0
            };
        }
    });

    return (
        <div className="categories">
            <div
                onClick={() => setIsOpen(prev => !prev)}
                className="heading flex items-center justify-between cursor-pointer"
            >
                <h3 className="font-medium text-lg sm:text-xl select-none">All Categories</h3>
                <FontAwesomeIcon icon={faAngleDown} className={`transition ${isOpen ? "rotate-180" : ""}`} />
            </div>
            {/* Category List */}
            <div className={`category-list transition-all will-change-auto grid ${isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}>
                <ul className="overflow-hidden space-y-2.5">
                    {isLoading ? (
                        Array.from({ length: LIMIT }).map((_, index) => (
                            <li key={index}>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                                    <div className="flex-1 h-6 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </li>
                        ))
                    ) : (
                        ([{ id: "all", name: "All Categories", product_count: data.total_count }, ...data.categories]).map((category) => (
                            <li key={category.id}>
                                <Link
                                    to={`/shop?category=${category.id}`}
                                    className="flex items-center gap-2"
                                >
                                    <RadioBox
                                        checked={CATEGORY_PARAM === category.id}
                                        value={category.id}
                                        name="category"
                                        onChange={() => { }}
                                    />
                                    <span className="font-medium">{category.name}</span>
                                    <span className="text-grey-600">({category.product_count || 0})</span>
                                </Link>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Categories;