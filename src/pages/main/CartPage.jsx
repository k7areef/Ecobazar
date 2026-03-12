import useChangeTitle from "@hooks/useChangeTitle";

function CartPage() {
    useChangeTitle({ title: 'Cart' });
    return (
        <div className="cart-page">
            CartPage
        </div>
    )
}

export default CartPage;