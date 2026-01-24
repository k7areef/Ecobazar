import PopularCategories from "@components/sections/PopularCategories";
import Testimonials from "@components/sections/Testimonials";

function HomePage() {
    return (
        <div className="home-page">
            <PopularCategories />
            <Testimonials />
        </div>
    )
}

export default HomePage;