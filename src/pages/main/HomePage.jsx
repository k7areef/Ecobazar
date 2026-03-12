import CartDrawer from "@components/layout/CartDrawer";
import NewsLetterModal from "@components/modals/NewsletterModal";
import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    useChangeTitle({ title: 'Ecobazar' });
    return (
        <div className="home-page">
            <main className="h-[1000vh]">
                <div className="container">
                    HomePage
                </div>
            </main>
            {/* News Letter Modal */}
            <NewsLetterModal />
            {/* Cart Drawer */}
            <CartDrawer />
        </div>
    )
}

export default HomePage;