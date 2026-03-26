import About from "@components/sections/About";
import CompanyLogo from "@components/sections/CompanyLogo";
import TeamSection from "@components/sections/TeamSection";
import Testimonials from "@components/sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";
import AboutImage1 from "@assets/images/about/about-1.png";
import AboutImage2 from "@assets/images/about/about-2.png";
import AboutImage3 from "@assets/images/about/about-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBoxOpen, faCheck, faHeadphones, faLeaf, faMoneyBillTransfer, faShippingFast } from "@fortawesome/free-solid-svg-icons";
import Button from "@components/UI/Button";
import features from "@data/features.json";

const iconsMaper = {
    fastShipping: faShippingFast,
    greatSupport: faHeadphones,
    securePaymanet: faMoneyBillTransfer,
    monyBack: faBoxOpen,
    organic: faLeaf,
    fresh: faCheck
}

function AboutPage() {
    useChangeTitle({ title: 'About' });
    return (
        <div className="about-page">
            {/* About 1 */}
            <About
                leftContent={<div>
                    <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">100% Trusted Organic Food Store</h2>
                    <p className="mt-3">
                        Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
                        Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante,
                        at commodo felis congue vitae.
                    </p>
                </div>}
                rightContent={<div className="max-md:-order-1">
                    <img
                        src={AboutImage1}
                        alt="About 1"
                        className="rounded-md"
                    />
                </div>}
            />
            {/* About 2 */}
            <About
                leftContent={<div>
                    <img
                        src={AboutImage2}
                        alt="About 2"
                        className="rounded-md"
                    />
                </div>}
                rightContent={<div>
                    <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">100% Trusted Organic Food Store</h2>
                    <p className="mt-3">
                        Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
                        Nulla eu eros consequat tortor tincidunt feugiat.
                    </p>
                    <ul className="featues mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="icon-wrapper w-16 h-16 rounded-full bg-primary/10 text-hard-primary flex items-center justify-center text-2xl">
                                    <FontAwesomeIcon icon={iconsMaper[feature.icon]} />
                                </div>
                                <div className="text-wrapper">
                                    <h3>{feature.name}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>}
            />
            {/* About 3 */}
            <About
                leftContent={<div>
                    <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">We Delivered, You Enjoy Your Order.</h2>
                    <p className="mt-3">
                        Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam,
                        ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
                    </p>
                    <ul className="features space-y-2 mt-5">
                        <li className="flex items-center gap-2 [&>span]:text-grey-600 [&>div.check-icon]:flex [&>div.check-icon]:items-center [&>div.check-icon]:justify-center [&>div.check-icon]:w-6 [&>div.check-icon]:h-6 [&>div.check-icon]:bg-primary/10 [&>div.check-icon]:text-hard-primary [&>div.check-icon]:rounded-full [&>div.check-icon]:text-xs">
                            <div className="check-icon">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <span>Sed in metus pellentesque.</span>
                        </li>
                        <li className="flex items-center gap-2 [&>span]:text-grey-600 [&>div.check-icon]:flex [&>div.check-icon]:items-center [&>div.check-icon]:justify-center [&>div.check-icon]:w-6 [&>div.check-icon]:h-6 [&>div.check-icon]:bg-primary/10 [&>div.check-icon]:text-hard-primary [&>div.check-icon]:rounded-full [&>div.check-icon]:text-xs">
                            <div className="check-icon">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <span>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem..</span>
                        </li>
                        <li className="flex items-center gap-2 [&>span]:text-grey-600 [&>div.check-icon]:flex [&>div.check-icon]:items-center [&>div.check-icon]:justify-center [&>div.check-icon]:w-6 [&>div.check-icon]:h-6 [&>div.check-icon]:bg-primary/10 [&>div.check-icon]:text-hard-primary [&>div.check-icon]:rounded-full [&>div.check-icon]:text-xs">
                            <div className="check-icon">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <span>Maecenas ut nunc fringilla erat varius..</span>
                        </li>
                    </ul>
                    <Button
                        to={'/shop'}
                        title="Shop Now"
                        className="mt-5 flex items-center gap-2 justify-center sm:w-fit rounded-full"
                    >
                        <span>Shop Now</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </div>}
                rightContent={<div className="max-md:-order-1">
                    <img
                        src={AboutImage3}
                        alt="About 3"
                    />
                </div>}
            />
            <TeamSection />
            <Testimonials />
            <CompanyLogo />
        </div>
    )
}

export default AboutPage;