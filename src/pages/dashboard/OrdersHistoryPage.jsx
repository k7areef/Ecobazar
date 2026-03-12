import useChangeTitle from "@hooks/useChangeTitle";

function OrdersHistoryPage() {
    useChangeTitle({ title: 'Orders History' });
    return (
        <div className="orders-history-page">
            OrdersHistoryPage
        </div>
    )
}

export default OrdersHistoryPage;