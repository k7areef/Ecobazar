import FaqsImage from '@assets/faqs.png';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const faqs = [
    {
        question: "In elementum est a ante sodales iaculis.",
        answer: "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae."
    },
    {
        question: "Etiam lobortis massa eu nibh tempor elementum.",
        answer: "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae."
    },
    {
        question: "In elementum est a ante sodales iaculis.",
        answer: "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae."
    },
    {
        question: "Aenean quis quam nec lacus semper dignissim.",
        answer: "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae."
    },
    {
        question: "Nulla tincidunt eros id tempus accumsan.",
        answer: "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae."
    }
];

const FaqItem = ({ faq }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className={`faq rounded-md border ${isOpen ? "border-primary" : "border-transparent"}`}>
            <div className={`faq-header cursor-pointer flex items-center justify-between gap-3 px-5 py-3 border-b rounded-md transition ${isOpen ? "border-b-primary rounded-b-none" : "bg-gray-50 border-b-transparent"}`} onClick={() => setIsOpen(prev => !prev)}>
                <h3 className={`font-medium text-lg sm:text-xl select-none line-clamp-1 transition ${isOpen ? "text-primary" : ""}`}>{faq.question}</h3>
                <FontAwesomeIcon icon={faPlus} className={`transition ${isOpen ? "rotate-45" : ""}`} />
            </div>
            <div className={`faq-body transition-all ${isOpen ? "px-5 py-3 max-h-200" : "max-h-0 overflow-hidden"}`}>
                <p className="text-gray-600">{faq.answer}</p>
            </div>
        </div>
    )
};

function FaqsPage() {
    return (
        <div className="faqs-page py-5 md:py-10">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
                {/* Faqs */}
                <div className="faqs max-md:order-1">
                    <h2 className='font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3'>Welcome, Let’s Talk About Our Ecobazar</h2>
                    <div className="faqs-items space-y-5">
                        {
                            faqs.map((faq, index) => (
                                <FaqItem
                                    faq={faq}
                                    key={index}
                                />
                            ))
                        }
                    </div>
                </div>
                {/* Faqs Hero */}
                <div className="faqs-hero">
                    <img
                        src={FaqsImage}
                        alt="Faqs Image"
                    />
                </div>
            </div>
        </div>
    )
}

export default FaqsPage;