import useChangeTitle from "@hooks/useChangeTitle";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {

    const { id } = useParams();
    useChangeTitle({ title: `Product Details | ${id}` });

    return (
        <div className="product-details-page">
            ProductDetailsPage
        </div>
    )
}

export default ProductDetailsPage;