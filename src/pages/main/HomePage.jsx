import NewsLetterModal from "@components/modals/NewsletterModal";
import ProductQuickViewModal from "@components/modals/ProductQuickViewModal";
import CompanyLogo from "@components/sections/CompanyLogo";
import ContactInformation from "@components/sections/ContactInformation";
import FeaturedProducts from "@components/sections/FeaturedProducts";
import Features from "@components/sections/Features";
import HeroSection from "@components/sections/HeroSection";
import LatestNews from "@components/sections/LatestNews";
import Statistics from "@components/sections/Statistics";
import Testimonials from "@components/sections/Testimonials";
import TopCategories from "@components/sections/TopCategories";
import WhyChoseUs from "@components/sections/WhyChoseUs";
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
                <WhyChoseUs />
                <Statistics />
                <LatestNews />
                <Testimonials />
                <CompanyLogo />
                <ContactInformation />
            </main>
            {/* News Letter Modal */}
            <NewsLetterModal />
            {/* Quick View Modal */}
            <ProductQuickViewModal />
        </div>
    )
}

export default HomePage;