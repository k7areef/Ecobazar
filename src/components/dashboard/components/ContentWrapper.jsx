/**
 * @param {React.HTMLAttributes<HTMLDivElement> & {title?: string}} props
 */

function ContentWrapper({ title = "", children, ...props }) {
    return (
        <div {...props} className={`${props.className} border border-gray-100 rounded-md`}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium my-3 mx-5">{title}</h3>
            <hr className="border-gray-100" />
            <div className="content-container p-5">
                {children}
            </div>
        </div>
    )
}

export default ContentWrapper;