import Button from '@components/UI/Button'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BlogHeader({ onFilterClick }) {
    return (
        <div className="header mb-5">
            <Button
                onClick={onFilterClick}
                className='flex items-center gap-2 rounded-full'
            >
                <span>Filter</span>
                <FontAwesomeIcon icon={faFilter} />
            </Button>
        </div>
    )
}

export default BlogHeader