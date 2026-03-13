import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @typedef {Object} DropdownProps
 * @prop {string} [className]
 * @prop {string} selected
 * @prop {object[]} options
 * @prop {Function} onSelectedChange
 * @prop {React.ReactNode} optionComponent
 */

/**
 * @param {DropdownProps} props
 */

function Dropdown({ selected = "Select", options = [], onSelectedChange, className, optionComponent }) {

    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`dropdown relative${className ? ` ${className}` : ''}`} ref={dropdownRef}>
            <button
                title={selected}
                aria-label="Select"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center gap-2 font-medium min-w-15"
            >
                <span>{selected}</span>
                <FontAwesomeIcon icon={faAngleDown} className={`transition duration-200 ease-out will-change-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {/* Options */}
            {
                isOpen && (
                    <div className="options absolute z-2 sm:right-0 max-sm:left-0 top-full mt-1 max-w-40 max-h-200 bg-white rounded-lg overflow-hidden border-2 border-grey-100">
                        {
                            options.map((option, index) => {
                                const isActive = option.short === selected || option.value === selected;
                                return (
                                    <button
                                        key={index}
                                        title={option.value}
                                        aria-label={option.value}
                                        onClick={() => {
                                            setIsOpen(false);
                                            onSelectedChange(option);
                                        }}
                                        className={`py-2 px-4 w-full ${isActive ? "active bg-grey-100" : "sm:hover:bg-grey-100"} transition-colors text-grey-900 group`}
                                    >
                                        {optionComponent ? optionComponent(option) : option.value}
                                    </button>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Dropdown;