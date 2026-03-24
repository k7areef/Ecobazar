import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TestimonialCardSkeleton() {
    return (
        <div className="testimonial-card-skeleton bg-white rounded-lg p-3 md:p-5 space-y-5">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-primary/30 text-5xl animate-pulse" />
            <div className="h-15.75 flex flex-col gap-2">
                <div className="h-full rounded-sm bg-primary/30 animate-pulse"></div>
                <div className="h-full rounded-sm bg-primary/30 animate-pulse w-3/4"></div>
                <div className="h-full rounded-sm bg-primary/30 animate-pulse w-1/2"></div>
            </div>
            <div className="h-12.25 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/30 animate-pulse"></div>
                    <div>
                        <div className="w-30 h-4 rounded-sm bg-primary/30 animate-pulse mb-1"></div>
                        <div className="w-15 h-4 rounded-sm bg-primary/30 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCardSkeleton;