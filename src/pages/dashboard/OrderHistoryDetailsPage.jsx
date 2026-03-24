import OrderHistoryDetails from "@components/dashboard/OrderHistoryPage/OrderHistoryDetails";
import useChangeTitle from "@hooks/useChangeTitle";
import { useParams } from "react-router-dom";

function OrderHistoryDetailsPage() {

    const { id } = useParams();
    useChangeTitle({ title: `Order Details | ${id}` });

    return (
        <div className="order-history-details-page">
            <OrderHistoryDetails />
        </div>
    )
}

export default OrderHistoryDetailsPage;