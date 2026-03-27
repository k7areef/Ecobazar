/**
 * @typedef {Object} RadioBoxProps
 * @prop {boolean} checked
 * @prop {string} value
 * @prop {string} name
 * @prop {Function} onChange
 */

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @param {RadioBoxProps} props
 * @returns 
 */
function RadioBox({ checked, value, name, onChange }) {
    return (
        <label>
            <input
                type="radio"
                name={name}
                value={value}
                className="hidden peer"
                onChange={onChange}
                checked={checked}
            />
            <div className="custom-radio-box flex items-center justify-center w-5 h-5 border-2 border-primary text-primary rounded-full peer-checked:*:scale-60">
                <FontAwesomeIcon icon={faCircle} className="transition-transform will-change-transform scale-0" />
            </div>
        </label>
    )
}

export default RadioBox;