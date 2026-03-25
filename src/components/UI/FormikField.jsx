/**
 * @typedef {Object} FormikFieldProps
 * @prop {Object} field
 * @prop {string} typeField
 * @prop {string} [label]
 * @prop {string} [mainClassName]
 * @prop {string} [icon]
 */

/**
 * @param {FormikFieldProps} props
 */

import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorMessage } from "formik";
import React from "react";

const iconsmap = {
    location: faLocationDot
}

function FormikField({ typeField = "input", label, icon, mainClassName, ...props }) {

    const [passRevaled, setPassRevaled] = React.useState(false);

    const sharedStyles = `w-full p-3 bg-white border border-grey-100 placeholder:text-grey-600 rounded-md transition duration-300 ease-in-out read-only:border-transparent not-read-only:focus:border-primary`;

    const handleRevalPassword = React.useCallback(() => {
        setPassRevaled(prev => !prev);
    }, []);

    const inputType = (props.type === "password" && passRevaled) ? "text" : props.type;

    return (
        <div className={`formik-field${mainClassName ? " " + mainClassName : ""} relative`}>
            {
                icon && iconsmap[icon] &&
                <FontAwesomeIcon icon={iconsmap[icon]} className="absolute right-3 bottom-4.5" />
            }
            {label && <label htmlFor={props.id} className="w-fit block mb-2">{label}</label>}
            {
                typeField === "input" ? (
                    <div className="input-wrapper relative">
                        <input
                            {...props}
                            type={inputType}
                            className={sharedStyles}
                        />
                        {
                            props.type === "password" &&
                            <button
                                type="button"
                                tabIndex="-1"
                                onClick={handleRevalPassword}
                                className="absolute bottom-2.5 right-3 text-lg"
                            >
                                <FontAwesomeIcon icon={passRevaled ? faEyeSlash : faEye} />
                                <span className="sr-only">Reveal Password</span>
                            </button>
                        }
                    </div>
                ) : typeField === "textarea" ? (
                    <textarea
                        {...props}
                        className={`${sharedStyles} resize-none h-40`}
                    >
                    </textarea>
                ) : null
            }
            {/* Error Message */}
            <ErrorMessage name={props.name} component="p" className="text-red-500! mt-2" />
        </div >
    )
}

export default FormikField;