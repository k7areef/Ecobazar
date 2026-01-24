import { Link } from "react-router-dom";

/**
 * @typedef {Object} IconButtonCustomProps
 * @property {string} [to] 
 * @property {'white' | 'gray' | 'ghost'} [variant]
 * @property {React.ReactNode} children
 */

/**
 * @typedef {IconButtonCustomProps & React.ButtonHTMLAttributes<HTMLButtonElement> & import("react-router-dom").LinkProps} IconButtonProps
 */

/**
 * @param {IconButtonProps} props 
 */

function IconButton({ to = "", variant = "white", children, ...props }) {

    const variants = {
        white: "bg-white border border-gray-100 not-disabled:sm:hover:border-primary",
        gray: "bg-gray-50",
        ghost: "bg-transparent",
    }
    const finalClassName = `w-10 h-10 flex items-center justify-center rounded-full disabled:cursor-default! disabled:opacity-50 not-disabled:sm:hover:bg-primary not-disabled:sm:hover:text-white transition ${variants[variant]} ${props.className}`;

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

export default IconButton;