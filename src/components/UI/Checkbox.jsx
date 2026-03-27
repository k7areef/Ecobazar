/**
 * @typedef {Object} CheckboxProps
 * @property {string} className 
 * @property {string} name
 * @property {string} id
 * @property {Function} onChange
 */

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @param {CheckboxProps} props
 */
function Checkbox({ className, name, id, onChange = () => { } }) {
    return (
        <label>
            <input
                type="checkbox"
                name={name}
                id={id}
                onChange={onChange}
                className="hidden peer"
            />
            <div className={`${className} custom-checkbox flex items-center justify-center w-5 h-5 border-2 border-primary text-white rounded-sm peer-checked:bg-primary peer-checked:*:scale-70`}>
                <FontAwesomeIcon icon={faCheck} className="transition-transform will-change-transform scale-0" />
            </div>
        </label>
    )
}

export default Checkbox;