import React from "react";
import Pagination from "@components/common/Pagination";
import ProductQuickViewModal from "@components/modals/ProductQuickViewModal";
import ProductsGrid from "@components/products/ProductsGrid";
import ProductsHeader from "@components/products/ProductsHeader";
import ProductsSidebar from "@components/products/ProductsSidebar";
import useChangeTitle from "@hooks/useChangeTitle";
import { useQuery } from "@tanstack/react-query";
import { CALC_TOTAL_PAGES } from "@utils/helpers";
import { supabase } from "@utils/supabaseClient";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
    useChangeTitle({ title: 'Products' });

    const [currentPage, setCurrentPage] = React.useState(1);
    const LIMIT = 15;

    const from = (currentPage - 1) * LIMIT;
    const to = from + LIMIT - 1;

    const [searchParams] = useSearchParams();
    const CATEGORY_PARAM = searchParams.get('category') || 'all';

    React.useEffect(() => { // Reset page when category changes
        setCurrentPage(1);
    }, [CATEGORY_PARAM]);

    const { data, isLoading } = useQuery({
        queryKey: ['products', CATEGORY_PARAM, currentPage],
        queryFn: async () => {
            let query = supabase
                .from("products")
                .select("*", { count: "exact" })
                .range(from, to)
                .limit(LIMIT);

            if (CATEGORY_PARAM !== "all") {
                query = query.eq('category_id', CATEGORY_PARAM);
            }

            const { data, error, count } = await query;
            if (error) throw error;
            return { products: data, totalCount: count };
        }
    });

    const totalPages = CALC_TOTAL_PAGES(data?.totalCount, LIMIT);

    const handleNext = React.useCallback(() => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    }, [currentPage, totalPages]);

    const handlePrev = React.useCallback(() => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    }, [currentPage]);


    return (
        <div className="products-page py-5 md:py-10">
            <div className="container">
                {/* Header */}
                <ProductsHeader />
                {/* Content Wrapper */}
                <div className="content-wrapper flex gap-5">
                    {/* Sidebar */}
                    <ProductsSidebar />
                    {/* Main Content */}
                    <main className="main-content flex-1 min-w-0">
                        <ProductsGrid isLoading={isLoading} products={data?.products || []} limit={LIMIT} className="2xl:grid-cols-3!" />
                        <Pagination
                            current={currentPage}
                            pageCount={totalPages}
                            className="justify-center p-5"
                            handleNext={handleNext}
                            handlePageChange={(page) => {
                                setCurrentPage(page);
                            }}
                            handlePrev={handlePrev}
                            nextDisabled={currentPage >= totalPages}
                            prevDisabled={currentPage <= 1}
                        />
                    </main>
                </div>
            </div>
            {/* Product Quick View Modal */}
            <ProductQuickViewModal />
        </div>
    )
}

export default ProductsPage;