import ProductQuickViewModal from "@components/modals/ProductQuickViewModal";
import useChangeTitle from "@hooks/useChangeTitle";

function ProductsPage() {
    useChangeTitle({ title: 'Products' });
    return (
        <div className="products-page">
            <main>
                <div className="container">
                    ProductsPage
                </div>
            </main>
            {/* Product Quick View Modal */}
            <ProductQuickViewModal />
        </div>
    )
}

export default ProductsPage;