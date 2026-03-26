import ProductQuickViewModal from "@components/modals/ProductQuickViewModal";
import ProductsHeader from "@components/products/ProductsHeader";
import ProductsSidebar from "@components/products/ProductsSidebar";
import useChangeTitle from "@hooks/useChangeTitle";

function ProductsPage() {
    useChangeTitle({ title: 'Products' });
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
                        Main Content
                    </main>
                </div>
            </div>
            {/* Product Quick View Modal */}
            <ProductQuickViewModal />
        </div>
    )
}

export default ProductsPage;