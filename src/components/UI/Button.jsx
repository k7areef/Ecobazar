import { Link } from "react-router-dom";

/**
 * @typedef {Object} CustomButtonProps
 * @property {string} [to]
 * @property {string} [href]
 * @property {string} [type]
 * @property {string} [className]
 * @property {React.ReactNode} children
 * @property {'primary' | 'secondary' | 'ghost' | 'dark' | 'outline'} [variant]
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement> | import("react-router-dom").LinkProps} [props]
 */

/**
 * @param {ButtonProps & React.HTMLAttributes<HTMLElement>} props
 * @typedef {CustomButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & import("react-router-dom").LinkProps} ButtonProps
 */

function Button({ variant = "primary", to, href, type, className, children }) {

    const variants = {
        primary: "bg-primary text-white sm:hover:bg-hard-primary",
        secondary: "bg-grey-50 text-grey-900 sm:hover:bg-grey-100",
        ghost: "bg-primary/10 text-primary sm:hover:bg-hard-primary/20",
        dark: "bg-grey-800 text-white sm:hover:bg-grey-900",
        outline: "outline outline-2 outline-primary text-primary sm:hover:outline-hard-primary sm:hover:text-hard-primary",
    }

    const classNames = `px-4 py-2 sm:py-3 font-semibold transition duration-300 ease-in-out ${variants[variant]}${className ? ` ${className}` : ""}`;

    if (href) {
        return (
            <a
                href={href}
                className={classNames}
            >
                {children}
            </a>
        )
    }

    if (to) {
        return (
            <Link
                to={to}
                className={classNames}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            className={classNames}
            type={type || "button"}
        >
            {children}
        </button>
    )
}

export default Button;