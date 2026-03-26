import React from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Slider from '@radix-ui/react-slider';

function PriceRange() {

    const [isOpen, setIsOpen] = React.useState(true);
    const [range, setRange] = React.useState([50, 1500]);

    return (
        <div className="price-range">
            <div
                onClick={() => setIsOpen(prev => !prev)}
                className="heading flex items-center justify-between cursor-pointer"
            >
                <h3 className="font-medium text-lg sm:text-xl select-none">Price</h3>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>
            {/* Price Range */}
            <div className={`price-range transition-all will-change-auto grid ${isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden space-y-2.5">
                    {/* Price Slider */}
                    <Slider.Root
                        className="relative flex items-center select-none touch-none w-full h-5"
                        value={range}
                        max={2000}
                        step={20}
                        onValueChange={setRange}
                    >
                        <Slider.Track className="bg-gray-200 relative grow rounded-full h-0.75">
                            <Slider.Range className="absolute bg-green-600 rounded-full h-full" />
                        </Slider.Track>

                        <Slider.Thumb
                            className="block w-5 h-5 bg-white border-2 border-green-600 rounded-full hover:bg-gray-50 focus:outline-none shadow-sm cursor-pointer"
                            aria-label="Min Price"
                        />
                        <Slider.Thumb
                            className="block w-5 h-5 bg-white border-2 border-green-600 rounded-full hover:bg-gray-50 focus:outline-none shadow-sm cursor-pointer"
                            aria-label="Max Price"
                        />
                    </Slider.Root>
                    {/* Price Text */}
                    <div className="price-text flex items-center gap-2">
                        <span className="text-grey-600">Price:</span>
                        <span className="font-medium">${range[0].toLocaleString()} - ${range[1].toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceRange;