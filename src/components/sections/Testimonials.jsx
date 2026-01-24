import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeader from "./shared/SectionHeader";
import { faArrowLeft, faArrowRight, faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialsData from "@data/testimonials.json";
import IconButton from "@components/UI/IconButton";

function Testimonials() {
    return (
        <section className="testimonials bg-gray-50 py-5 md:py-10" id="testimonials">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Client Testimonails"
                >
                    <div className="testimonials-indicators flex items-center gap-3">
                        <IconButton
                            type="button"
                            className="testimonials-indicator-left"
                        >
                            <span className="sr-only">Previous</span>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </IconButton>
                        <IconButton
                            type="button"
                            className="testimonials-indicator-right"
                        >
                            <span className="sr-only">Previous</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </IconButton>
                    </div>
                </SectionHeader>
                {/* Testimonials Slider */}
                <div className="testimonials-slider">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }}
                        navigation={{
                            nextEl: '.testimonials-indicator-right',
                            prevEl: '.testimonials-indicator-left',
                        }}
                    >
                        {
                            TestimonialsData.map((testimonial, index) => (
                                <SwiperSlide key={index} className="h-auto!">
                                    <div
                                        key={index}
                                        className="testimonial-card p-5 rounded-md bg-white shadow h-full flex flex-col gap-3"
                                    >
                                        <FontAwesomeIcon icon={faQuoteLeft} className="text-5xl text-primary/30" />
                                        <p className="text-gray-700 max-sm:order-1">{testimonial.comment}</p>
                                        <div className="author-info flex items-center gap-3 sm:mt-auto flex-wrap">
                                            <div className="avatar-container shrink-0 max-sm:w-full">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full object-cover max-sm:mx-auto"
                                                />
                                            </div>
                                            <div className="text-info shrink-0">
                                                <h3 className="font-medium">{testimonial.name}</h3>
                                                <p className="text-gray-400">{testimonial.role}</p>
                                            </div>
                                            <ul className="rating ms-auto shrink-0 flex items-center gap-0.5">
                                                {
                                                    Array.from({ length: 5 }).map((_, index) => (<li key={index}>
                                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                    </li>))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;