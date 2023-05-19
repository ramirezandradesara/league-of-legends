
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function BackButton() {
    return (
        <Link to="/champions">
            <button>
                <IoChevronBackCircleOutline className='back-icon' />
            </button>
        </Link>
    )
}

export default BackButton