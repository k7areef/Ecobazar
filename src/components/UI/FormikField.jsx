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

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorMessage } from "formik";
import React from "react";

const iconsmap = {
    location: faLocationDot
}

function FormikField({ typeField, label, icon, mainClassName, ...props }) {

    const sharedStyles = `w-full p-3 bg-white border border-grey-100 placeholder:text-grey-600 rounded-md transition duration-300 ease-in-out read-only:border-transparent not-read-only:focus:border-purple-60`;

    return (
        <div className={`formik-field${mainClassName ? " " + mainClassName : ""} relative`}>
            {
                icon && iconsmap[icon] &&
                <FontAwesomeIcon icon={iconsmap[icon]} className="absolute right-3 bottom-4.5" />
            }
            {label && <label htmlFor={props.id} className="w-fit block mb-2">{label}</label>}
            {
                typeField === "input" ? (
                    <input
                        {...props}
                        className={sharedStyles}
                    />
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