import useChangeTitle from "@hooks/useChangeTitle";

function CheckoutPage() {
    useChangeTitle({ title: 'Checkout' });
    return (
        <div className="checkout-page">
            CheckoutPage
        </div>
    )
}

export default CheckoutPage;