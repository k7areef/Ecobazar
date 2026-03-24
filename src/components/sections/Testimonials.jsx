import { faAngleLeft, faAngleRight, faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { GET_TESTIMONIALS } from "@utils/api";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {

    const { data, isLoading } = useQuery({
        queryKey: ['testimonials'],
        queryFn: () => GET_TESTIMONIALS().then(res => res.data),
        refetchOnWindowFocus: false
    });

    const navigation = {
        nextEl: '.testi-navi-next',
        prevEl: '.testi-navi-prev',
    };

    const navigationBtnStyles = `transition duration-300 ease-in-out w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center bg-primary text-white disabled:bg-white disabled:text-inherit disabled:cursor-not-allowed disabled:border-grey-100`;

    return (
        <section className="testimonials-section py-5 md:py-10 bg-primary/10" id="testimonials">
            <div className="container">
                {/* Header */}
                <div className="section-header flex items-center justify-between mb-5 md:mb-10 max-md:flex-wrap max-sm:flex-col gap-3">
                    <div className="text-wrapper w-full">
                        <span className="uppercase text-primary italic">Testimonials</span>
                        <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">What Our Customer Says</h2>
                    </div>
                    <div className="children-wrapper">
                        <div className="slider-navigation flex items-center gap-3">
                            <button
                                type="button"
                                title="Previous"
                                aria-label="Previous"
                                className={`testi-navi-prev ${navigationBtnStyles}`}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} />
                                <span className="sr-only">Previous</span>
                            </button>
                            <button
                                type="button"
                                title="Next"
                                aria-label="Next"
                                className={`testi-navi-next ${navigationBtnStyles}`}
                            >
                                <FontAwesomeIcon icon={faAngleRight} />
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Testimonials */}
                <div className="testimonials-slider">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1.3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2.3,
                            },
                            1280: {
                                slidesPerView: 3,
                            },
                        }}
                        navigation={navigation}
                    >
                        {
                            isLoading ? (
                                <>Loading</>
                            ) : (
                                data.map((testimonial, index) => (<SwiperSlide key={index}>
                                    <div className="testimonial-card bg-white rounded-lg p-3 md:p-5 space-y-5">
                                        <FontAwesomeIcon icon={faQuoteLeft} className="text-primary/30 text-5xl" />
                                        <p className="line-clamp-3">{testimonial.content}</p>
                                        {/* Author */}
                                        <div className="author flex items-center justify-between gap-3">
                                            {/* Info */}
                                            <div className="info w-full flex items-center gap-3">
                                                <img
                                                    src={testimonial.avatar_url}
                                                    alt={testimonial.author}
                                                    className="w-12 h-12 rounded-full object-cover shrink-0"
                                                />
                                                <div className="text-info w-full">
                                                    <h3 className="font-medium text-lg">{testimonial.author}</h3>
                                                    <p>{testimonial.description}</p>
                                                </div>
                                            </div>
                                            {/* Rating */}
                                            <div className="rating shrink-0">
                                                <ul className="flex items-center gap-0.5">
                                                    {
                                                        Array.from({ length: testimonial.rating }).map((_, index) => (
                                                            <li key={index}>
                                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>))
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;