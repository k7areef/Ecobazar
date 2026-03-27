/**
 * @typedef {Object} PaginationProps
 * @property {number} pageCount
 * @property {number} current
 * @property {string} [className]
 * @property {boolean} [prevDisabled]
 * @property {boolean} [nextDisabled]
 * @property {Function} [handlePrev]
 * @property {Function} [handleNext]
 * @property {Function} [handlePageChange]
 */

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @param {PaginationProps} props
 */
function Pagination({
    pageCount = 1,
    current = 1,
    className = '',
    prevDisabled = false,
    nextDisabled = false,
    handlePrev = () => { },
    handleNext = () => { },
    handlePageChange = () => { }
}) {

    const styles = 'text-xl bg-white rounded-full w-10 h-10 border border-grey-100 disabled:bg-grey-50 disabled:border-transparent disabled:text-grey-300 disabled:cursor-not-allowed! not-disabled:sm:hover:bg-grey-100 not-disabled:transition-colors';

    return (
        <div className={`pagination flex items-center gap-3${className ? ` ${className}` : ""}`}>
            {/* Previous Button */}
            <button
                type='button'
                onClick={handlePrev}
                disabled={prevDisabled}
                className={`${styles}`}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            {/* Page Numbers */}
            <div className="page-numbers flex items-center gap-2">
                {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        type='button'
                        onClick={() => handlePageChange(page)}
                        disabled={page === current}
                        className={`${styles} ${page === current ? 'bg-primary! text-white!' : ''}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            {/* Next Button */}
            <button
                type='button'
                onClick={handleNext}
                disabled={nextDisabled}
                className={`${styles}`}
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    )
}

export default Pagination;