import { faAngleUp, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function Categories() {

    const [isOpen, setIsOpen] = React.useState(true);

    const LIMIT = 7;

    const [searchParams] = useSearchParams();
    const CATEGORY_PARAM = searchParams.get("category");

    const { data, isLoading } = useQuery({ // Get product categories
        queryKey: ["product_categories"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("product_categories")
                .select("*")
                .limit(LIMIT);
            if (error) throw error;
            return data;
        }
    });

    return (
        <div className="categories">
            <div
                onClick={() => setIsOpen(prev => !prev)}
                className="heading flex items-center justify-between cursor-pointer"
            >
                <h3 className="font-medium text-lg sm:text-xl select-none">All Categories</h3>
                <FontAwesomeIcon icon={faAngleUp} />
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
                        data?.map((category) => (
                            <li key={category.id}>
                                <Link
                                    to={`/shop?category=${category.id}`}
                                    className="flex items-center gap-2"
                                >
                                    <label>
                                        <input
                                            type="radio"
                                            name="category"
                                            value={category.id}
                                            className="hidden peer"
                                            onChange={() => { }}
                                            checked={CATEGORY_PARAM === category.id}
                                        />
                                        <div className="custom-radio-box flex items-center justify-center w-5 h-5 border-2 border-primary text-primary rounded-full peer-checked:*:scale-60">
                                            <FontAwesomeIcon icon={faCircle} className="transition-transform will-change-transform scale-0" />
                                        </div>
                                    </label>
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