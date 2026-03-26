/**
 * @typedef {Object} AboutProps
 * @property {React.ReactNode} [rightContent]
 * @property {React.ReactNode} [leftContent]
 * @property {string} [className]
 */

/**
 * @param {AboutProps} props
 */
function About({ rightContent, leftContent, className = '' }) {
    return (
        <section className={`about-section py-5 md:py-10${className ? ` ${className}` : ''}`} id="about">
            <div className="container">
                <div className="content-wrapper grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
                    {leftContent}
                    {rightContent}
                </div>
            </div>
        </section>
    )
}

export default About;