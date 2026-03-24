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

function SectionHeader({ beforeTtitle, title, description, children, className }) {
    return (
        <div className={`section-header flex sm:items-center justify-between mb-5 md:mb-10 max-md:flex-wrap max-sm:flex-col gap-3 ${className}`}>
            <div className="text-wrapper w-full">
                {beforeTtitle && <span className="uppercase text-primary italic">{beforeTtitle}</span>}
                <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">{title}</h2>
                {description && <p>{description}</p>}
            </div>
            <div className="children-wrapper">
                {children}
            </div>
        </div>
    )
}

export default SectionHeader;