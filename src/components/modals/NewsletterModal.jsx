import React from "react";
import BaseModal from "../UI/BaseModal";
import Hero from "@assets/images/news-letter-hero.png";
import Button from "@components/UI/Button";
import Checkbox from "@components/UI/Checkbox";

function NewsLetterModal() {

    const [isOpen, setIsOpen] = React.useState(false);
    const closeModal = React.useCallback(() => setIsOpen(false), []);

    return (
        <BaseModal isOpen={isOpen}>
            <div
                onClick={closeModal}
                className="newsletter-modal flex items-center h-dvh"
            >
                <div className="container">
                    <div
                        onClick={e => e.stopPropagation()}
                        className="content-wrapper p-5 rounded-lg bg-white grid grid-cols-1 md:grid-cols-2 gap-5 items-center"
                    >
                        {/* Hero */}
                        <div className="hero-image aspect-square">
                            <img src={Hero} alt="Newsletter" className="w-full h-full object-cover rounded-md" />
                        </div>
                        {/* Content */}
                        <div className="content text-center sm:p-5">
                            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-3">Subcribe to <br className="max-sm:hidden" /> Our Newsletter</h1>
                            <p className="mb-5 sm:text-lg!">
                                Subscribe to our newlletter and Save your <span className="text-warning font-semibold">20% money</span> with discount code today.
                            </p>
                            <form className="relative">
                                <input
                                    required
                                    type="email"
                                    name="newsletter-email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 border border-grey-100 transition focus:border-primary rounded-full"
                                />
                                <Button
                                    type="submit"
                                    title="Subscribe"
                                    aria-label="Subscribe to newsletter"
                                    className="rounded-full absolute right-0 h-full z-10"
                                >
                                    Subscribe
                                </Button>
                            </form>
                            <div className="dont-show-again flex items-center justify-center gap-2 mt-5">
                                {/* Checkbox */}
                                <Checkbox name='dont-show-again' id='dont-show-again' />
                                <label htmlFor="dont-show-again" className="cursor-pointer">
                                    <p>Don't show this again</p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseModal >
    )
}

export default NewsLetterModal;