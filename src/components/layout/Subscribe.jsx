import SocialProfiles from "@components/common/SocialProfiles";
import Button from "@components/UI/Button";

function Subscribe() {
    return (
        <div className="subscribe bg-[#f7f7f7] py-5 md:py-10">
            <div className="container flex items-center gap-5 max-lg:flex-col">
                <div className="text-container max-lg:w-full">
                    <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">Subcribe our Newsletter</h2>
                    <p className="text-gray-400">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </div>
                <div className="subscribe-form w-full flex items-center gap-5 max-sm:flex-col">
                    <form onSubmit={e => e.preventDefault()} className="w-full relative">
                        <input
                            type="email"
                            id="subscribeEmail"
                            name="subscribe_email"
                            placeholder="Your email address"
                            className="w-full p-3 rounded-full border border-gray-100 placeholder:text-gray-500 transition focus:border-primary"
                        />
                        <Button
                            type="submit"
                            className="absolute right-0 top-0 h-full"
                        >
                            Subscribe
                        </Button>
                    </form>
                    <SocialProfiles />
                </div>
            </div>
        </div>
    )
}

export default Subscribe;