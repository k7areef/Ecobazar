/**
 * @typedef {Object} SectionHeaderProps
 * @prop {string} [beforeTtitle]
 * @prop {string} title
 * @prop {string} [description]
 * @prop {string} [className]
 * @prop {React.ReactNode} [children]
 */

/**
 * @param {SectionHeaderProps} props
 */

function SectionHeader({ beforeTitle, title, description, children, className }) {
    return (
        <div className={`section-header flex sm:items-center justify-between mb-5 md:mb-10 max-md:flex-wrap max-sm:flex-col gap-3 ${className}`}>
            <div className="text-wrapper w-full">
                {beforeTitle && <span className="uppercase text-primary italic">{beforeTitle}</span>}
                <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">{title}</h2>
                {description && <p className="mt-2 md:max-w-lg md:mx-auto">{description}</p>}
            </div>
            <div className="children-wrapper shrink-0">
                {children}
            </div>
        </div>
    )
}

export default SectionHeader;