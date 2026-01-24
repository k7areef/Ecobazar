/**
 * @param {React.HTMLAttributes<HTMLElement>} props
 */

function SectionHeader({ title = "", description = "", children, ...props }) {
    return (
        <div className={`section-header mb-5 md:mb-10 flex items-center justify-between ${props.className}`}>
            <div className="text-container">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{title}</h2>
                {description && <p className="text-gray-600 mt-3">{description}</p>}
            </div>
            {/* Children */}
            {children}
        </div>
    )
}

export default SectionHeader;