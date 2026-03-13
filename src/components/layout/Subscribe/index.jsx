import Button from "@components/UI/Button";
import { useLocation } from "react-router-dom";
import SocialProfiles from "@data/social_profiles.json";
import { faFacebook, faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconsMaper = {
    facebook: faFacebook,
    github: faGithub,
    linkedin: faLinkedin,
    xTwitter: faXTwitter
};

function Subscribe() {

    const { pathname } = useLocation();
    if (pathname === '/') return null;

    return (
        <section className="subscribe bg-[#F7F7F7] py-5 mb:py-10" id="subscribe">
            <div className="container">
                <div className="content-container flex lg:items-center gap-5 lg:gap-10 max-lg:flex-col">
                    <div className="text-wrapper w-full">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1.5">Subscribe our Newsletter</h2>
                        <p className="text-grey-400!">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                    </div>
                    <div className="input-wrapper w-full flex items-center gap-3 max-sm:flex-col">
                        {/* Subscribe Form */}
                        <form onSubmit={e => e.preventDefault()} className="relative w-full">
                            <input
                                required
                                type="email"
                                id="subscribe"
                                name="subscribe"
                                placeholder="Your email address"
                                className="w-full py-3 px-6 rounded-full border-2 border-grey-100"
                            />
                            <Button
                                type="submit"
                                title="Subscribe"
                                aria-label="Subscribe"
                                className="rounded-full absolute z-1 right-0 top-0 h-full"
                            >
                                Subscribe
                            </Button>
                        </form>
                        {/* Social Profiles */}
                        <div className="social-profiles flex items-center gap-2 shrink-0">
                            {
                                SocialProfiles.map((profile, index) => (<Button
                                    variant="ghost"
                                    href={profile.href}
                                    key={profile.id || index}
                                    className="rounded-full p-0! w-12 h-12 flex items-center justify-center text-2xl sm:hover:bg-primary sm:hover:text-white"
                                >
                                    <FontAwesomeIcon icon={iconsMaper[profile.icon || faGithub]} />
                                    <span className="sr-only"></span>
                                </Button>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;