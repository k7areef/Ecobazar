import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useClickOutside from "@hooks/useClickOutside";
import React from "react";

/**
 * @typedef {Object} Option
 * @property {React.ReactNode} children
 * @property {function} [onClick]
 */

/**
 * @typedef {Object} CustomProps
 * @property {string} [current]
 * @property {function(any):void} [setCurrent]
 * @property {Option[]} [options]
 */

/**
 * @typedef {CustomProps & React.ButtonHTMLAttributes<HTMLButtonElement>} DropdownProps
 */

/**
 * @param {DropdownProps} props
 */

function Dropdown({ current = "Dropdown", setCurrent = () => { }, options = [], ...props }) {

    const { ref, isOpen, setIsOpen } = useClickOutside()

    const handleChose = React.useCallback((val) => {
        setIsOpen(false);
        setCurrent(val);
    }, [setCurrent, setIsOpen]);

    return (
        <div className="dropdown relative" ref={ref}>
            <button
                type="button"
                onClick={() => setIsOpen(prev => !prev)}
                className={`py-2 flex items-center gap-2${props.className ? " " + props.className : ""}`}
            >
                <span>{current}</span>
                <FontAwesomeIcon icon={faAngleDown} className={`transition ${isOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            <div className={`dropdown-options absolute top-full right-0 text-nowrap bg-gray-600 rounded-md shadow min-w-20 overflow-hidden transition ${isOpen ? "opacity-100 translate-y-2" : "opacity-0 pointer-events-none translate-y-0"}`}>
                {
                    options.map((option, index) => (<button
                        key={index}
                        type="button"
                        {...option.props}
                        onClick={() => handleChose(option.value)}
                        className={`block py-2 px-4 w-full text-start text-white ${current === option.value ? "bg-gray-500" : "sm:hover:bg-gray-500"} transition`}
                    >
                        {option.value}
                    </button>))
                }
            </div>
        </div>
    )
}

export default Dropdown;