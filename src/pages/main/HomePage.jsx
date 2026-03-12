import CartDrawer from "@components/layout/CartDrawer";
import NewsLetterModal from "@components/modals/NewsletterModal";
import CompanyLogo from "@components/sections/CompanyLogo";
import ContactInformation from "@components/sections/ContactInformation";
import FeaturedProducts from "@components/sections/FeaturedProducts";
import Features from "@components/sections/Features";
import HeroSection from "@components/sections/HeroSection";
import LatestNews from "@components/sections/LatestNews";
import Statistics from "@components/sections/Statistics";
import Testimonials from "@components/sections/Testimonials";
import TopCategories from "@components/sections/TopCategories";
import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    useChangeTitle({ title: 'Ecobazar' });
    return (
        <div className="home-page">
            <main>
                <HeroSection />
                <Features />
                <FeaturedProducts />
                <TopCategories />
                <Statistics />
                <LatestNews />
                <Testimonials />
                <CompanyLogo />
                <ContactInformation />
            </main>
            {/* News Letter Modal */}
            <NewsLetterModal />
            {/* Cart Drawer */}
            <CartDrawer />
        </div>
    )
}

export default HomePage;