import Hero from "@assets/images/hero.png";
import Button from "@components/UI/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
    return (
        <section className="hero-section-section py-5 md:py-10 bg-green-50" id="heroSection">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center">
                {/* Hero */}
                <div className="hero">
                    <img
                        src={Hero}
                        alt="Hero"
                    />
                </div>
                {/* Content */}
                <div className="content">
                    <span className="text-primary uppercase font-medium">Welcome to Ecobazar</span>
                    <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight mt-2">Fresh & Healthy <br className="max-sm:hidden" /> Organic Food</h1>
                    <h2 className="mt-5 text-lg sm:text-xl">Sale up to <span className="text-warning font-semibold">30% OFF</span></h2>
                    <p className="mt-2">Free shipping on all your order. we deliver, you enjoy</p>
                    <Button
                        to={'/shop'}
                        title="Shop Now"
                        aria-label="Shop Now"
                        className="flex items-center justify-center gap-3 rounded-full w-fit mt-5 max-sm:w-full"
                    >
                        <span>Shop Now</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;