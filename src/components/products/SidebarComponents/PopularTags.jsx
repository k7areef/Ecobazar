import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";

function PopularTags() {

    const [isOpen, setIsOpen] = React.useState(true);

    const LIMIT = 7;

    const { data, isLoading } = useQuery({ // Get product categories
        queryKey: ["product_tags"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("product_tags")
                .select("*")
                .limit(LIMIT);
            if (error) throw error;
            return data;
        }
    });

    return (
        <div className="popular-tags">
            <div
                onClick={() => setIsOpen(prev => !prev)}
                className="heading flex items-center justify-between cursor-pointer"
            >
                <h3 className="font-medium text-lg sm:text-xl select-none">Popular Tags</h3>
                <FontAwesomeIcon icon={faAngleDown} className={`transition ${isOpen ? "rotate-180" : ""}`} />
            </div>
            {/* Tags */}
            <div className={`tags transition-all will-change-auto grid ${isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden flex items-center gap-2 text-nowrap flex-wrap">
                    {isLoading ? (
                        Array.from({ length: LIMIT }, (_, i) => (
                            <span key={i} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm cursor-pointer hover:bg-gray-200 transition-colors animate-pulse">
                                Loading...
                            </span>
                        ))
                    ) : (
                        data?.map((tag) => (
                            <span key={tag.id} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm cursor-pointer hover:bg-gray-200 transition-colors">
                                {tag.name}
                            </span>
                        )
                        ))}
                </div>
            </div>
        </div>
    )
}

export default PopularTags;