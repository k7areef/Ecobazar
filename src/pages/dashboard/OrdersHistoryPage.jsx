import OrderHistory from "@components/dashboard/OrderHistoryPage/OrderHistory";
import useChangeTitle from "@hooks/useChangeTitle";

function OrdersHistoryPage() {
    useChangeTitle({ title: 'Orders History' });
    return (
        <div className="orders-history-page">
            <OrderHistory />
        </div>
    )
}

export default OrdersHistoryPage;