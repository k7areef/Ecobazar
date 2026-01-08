import { ErrorMessage } from "formik";

function Input({ label, ...input }) {
    return (
        <div className="input">
            {
                label &&
                <label htmlFor={input.id} className="block mb-2 w-fit">
                    {label}
                </label>
            }
            <input
                {...input}
                className="w-full rounded-md border border-gray-100 p-3"
            />
            <ErrorMessage name={input.name} component={'div'} className="mt-2 text-danger first-letter:capitalize" />
        </div>
    )
}

export default Input;