import IconButton from "@components/UI/IconButton";
import SectionHeader from "./shared/SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamData from "@data/team.json";
import SocialProfiles from "@components/common/SocialProfiles";

function OurTeam() {
    return (
        <section className="our-team py-5 md:py-10" id="ourTeam">
            <div className="container">
                <SectionHeader
                    title="Our Awesome Team"
                    description="Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi."
                    className="[&>div.text-container]:text-center [&>div.text-container>p]:max-w-150 justify-center"
                />
                <div className="team-slider flex items-center gap-5 max-2xl:flex-wrap max-2xl:justify-center">
                    <IconButton
                        variant="white"
                        className="team-previous-indicator shrink-0"
                    >
                        <span className="sr-only">Previous Slide</span>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </IconButton>
                    <div className="slider-container w-full 2xl:w-[calc(100%-120px)] max-2xl:-order-1">
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
                                },
                                1440: {
                                    slidesPerView: 4
                                }
                            }}
                            navigation={{
                                nextEl: '.team-next-indicator',
                                prevEl: '.team-previous-indicator',
                            }}
                        >
                            {
                                TeamData.map((teamItem, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="team-card rounded-md overflow-hidden bg-white transition sm:hover:shadow-lg/3"
                                        >
                                            <div className="image-container relative group overflow-hidden">
                                                <img
                                                    src={teamItem.image}
                                                    alt={teamItem.name}
                                                    className="w-full transition object-cover sm:group-hover:scale-110 sm:group-hover:grayscale-50 duration-500 ease-out"
                                                />
                                                <div className="social-overlay absolute left-0 top-0 w-full h-full transition flex items-center justify-center bg-black/50 opacity-0 sm:group-hover:opacity-100 duration-500 ease-out sm:group-hover:*:scale-100">
                                                    <SocialProfiles className="text-white transition scale-110 duration-500 ease-out" />
                                                </div>
                                            </div>
                                            <div className="info p-3 border border-gray-100">
                                                <h3 className="font-medium">{teamItem.name}</h3>
                                                <p className="text-gray-500">{teamItem.role}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>))
                            }
                        </Swiper>
                    </div>
                    <IconButton
                        variant="white"
                        className="team-next-indicator shrink-0"
                    >
                        <span className="sr-only">Next Slide</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </IconButton>
                </div>
            </div>
        </section>
    )
}

export default OurTeam;