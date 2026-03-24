import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { GET_TESTIMONIALS } from "@utils/api";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from "./shared/SectionHeader";
import TestimonialCard from "@components/testimonials/TestimonialCard";
import TestimonialCardSkeleton from "@components/testimonials/TestimonialCardSkeleton";

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
                <SectionHeader
                    beforeTtitle="Testimonials"
                    title="What Our Customer Says"
                >
                    <div className="slider-navigation flex items-center gap-2">
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
                </SectionHeader>
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
                                Array.from({ length: 3 }).map((_, index) => (<SwiperSlide key={index}>
                                    <TestimonialCardSkeleton />
                                </SwiperSlide>))
                            ) : (
                                data.map((testimonial, index) => (<SwiperSlide key={index}>
                                    <TestimonialCard testimonial={testimonial} />
                                </SwiperSlide>))
                            )
                        }
                    </Swiper>
                </div>
            </div >
        </section >
    )
}

export default Testimonials;