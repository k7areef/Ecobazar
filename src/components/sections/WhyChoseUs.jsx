import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import WhyChoseUsImage1 from "@assets/images/why-chose-us/why-chose-us-1.png";
import WhyChoseUsImage2 from "@assets/images/why-chose-us/why-chose-us-2.png";
import Button from "@components/UI/Button";

function WhyChoseUs() {
    return (
        <section className="why-chose-us-section py-10 bg-white" id="whyChoseUs">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
                    {/* Images */}
                    <div className="images flex items-center gap-3">
                        <img
                            src={WhyChoseUsImage1}
                            alt="Team member"
                            className="w-1/2 rounded-md object-cover"
                        />
                        <img
                            src={WhyChoseUsImage2}
                            alt="Organic products"
                            className="w-1/2 rounded-md object-cover"
                        />
                    </div>

                    {/* Coprntent */}
                    <div className="content">
                        <h2 className="font-bold sm:text-lg md:text-xl lg:text-2xl leading-tight">
                            100% Trusted Organic Food Store
                        </h2>

                        <div className="mt-3 flex flex-col gap-4">
                            <div className="item">
                                <div className="header mb-3 flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                        <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                                    </div>
                                    <h3 className="font-medium text-sm sm:text-lg">Healthy & natural food for lovers of healthy food.</h3>
                                </div>
                                <p>
                                    Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum.
                                </p>
                            </div>

                            <div className="item">
                                <div className="header mb-3 flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                        <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                                    </div>
                                    <h3 className="font-medium text-sm sm:text-lg">Every day fresh and quality products for you.</h3>
                                </div>
                                <p>
                                    Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.
                                </p>
                            </div>

                            <Button
                                to={'/shop'}
                                title="Shop Now"
                                aria-label="Shop Now"
                                className="rounded-full flex items-center justify-center gap-3 sm:w-fit"
                            >
                                <span>Shop Now</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoseUs;
