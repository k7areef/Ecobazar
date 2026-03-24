/**
 * @typedef {Object} TestimonialCardProps
 * @prop {object} testimonial
 */

import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @param {TestimonialCardProps} props
 */

function TestimonialCard({ testimonial }) {
    return (
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
    )
}

export default TestimonialCard;