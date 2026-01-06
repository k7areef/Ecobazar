import { Link } from "react-router-dom";

/**
 * @typedef {Object} CustomButtonProps
 * @property {string} [to]
 * @property {'primary'} [variant]
 * @property {React.ReactNode} children
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement> | import("react-router-dom").LinkProps} [props]
 */

/**
 * @param {ButtonProps & React.HTMLAttributes<HTMLElement>} props
 * @typedef {CustomButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & import("react-router-dom").LinkProps} ButtonProps
 */

function Button({ to = "", variant = "primary", children, ...props }) {

    const variants = {
        primary: "bg-primary rounded-full text-white sm:hover:bg-hard-primary"
    };

    const finalClassName = `${variants[variant]} py-3 px-6 font-semibold transition`;

    if (to) {
        return (
            <Link
                to={to}
                {...props}
                className={finalClassName}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            {...props}
            className={finalClassName}
        >
            {children}
        </button>
    )
}

export default Button;