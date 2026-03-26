import ProductQuickViewModal from "@components/modals/ProductQuickViewModal";
import ProductsGrid from "@components/products/ProductsGrid";
import ProductsHeader from "@components/products/ProductsHeader";
import ProductsSidebar from "@components/products/ProductsSidebar";
import useChangeTitle from "@hooks/useChangeTitle";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
    useChangeTitle({ title: 'Products' });

    const LIMIT = 15;

    const [searchParams] = useSearchParams();
    const CATEGORY_PARAM = searchParams.get('category') || 'all';

    const { data, isLoading } = useQuery({
        queryKey: ['products', CATEGORY_PARAM],
        queryFn: async () => {
            let query = supabase
                .from("products")
                .select("*")
                .limit(LIMIT);

            if (CATEGORY_PARAM !== "all") {
                query = query.eq('category_id', CATEGORY_PARAM);
            }

            const { data, error } = await query;
            if (error) throw error;
            return data;
        }
    });

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
                        <ProductsGrid isLoading={isLoading} products={data || []} limit={LIMIT} />
                    </main>
                </div>
            </div>
            {/* Product Quick View Modal */}
            <ProductQuickViewModal />
        </div>
    )
}

export default ProductsPage;