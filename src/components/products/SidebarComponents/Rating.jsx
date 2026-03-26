import { faAngleUp, faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Rating() {

    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <div className="rating">
            <div
                onClick={() => setIsOpen(prev => !prev)}
                className="heading flex items-center justify-between cursor-pointer"
            >
                <h3 className="font-medium text-lg sm:text-xl select-none">Rating</h3>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>
            {/* Rating List */}
            <div className={`rating-list transition-all will-change-auto grid ${isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}>
                <ul className="overflow-hidden space-y-2.5">
                    {
                        [5, 4, 3, 2, 1].map((item, index) => (<li key={index} className='select-none'>
                            <div
                                className="flex items-center gap-2"
                            >
                                {/* Checkbox */}
                                <label>
                                    <input
                                        type="checkbox"
                                        name="rating"
                                        className="hidden peer"
                                        onChange={() => { }}
                                    />
                                    <div className="custom-checkbox flex items-center justify-center w-5 h-5 border-2 border-primary text-white rounded-sm peer-checked:bg-primary peer-checked:*:scale-70">
                                        <FontAwesomeIcon icon={faCheck} className="transition-transform will-change-transform scale-0" />
                                    </div>
                                </label>
                                {/* Stars */}
                                <ul className='flex items-center gap-0.5'>
                                    {
                                        Array.from({ length: item }, (_, i) => (
                                            <li key={i}>
                                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                            </li>
                                        ))
                                    }
                                    {
                                        Array.from({ length: 5 - item }, (_, i) => (
                                            <li key={i}>
                                                <FontAwesomeIcon icon={faStar} className='text-gray-300' />
                                            </li>
                                        ))
                                    }
                                </ul>
                                {/* Label */}
                                <span className="text-sm font-medium text-gray-600">({item}+)</span>
                            </div>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Rating;