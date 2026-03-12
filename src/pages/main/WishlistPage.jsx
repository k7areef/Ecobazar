import useChangeTitle from "@hooks/useChangeTitle";

function WishlistPage() {
    useChangeTitle({ title: 'Wishlist' });
    return (
        <div className="wishlist-page">
            WishlistPage
        </div>
    )
}

export default WishlistPage;