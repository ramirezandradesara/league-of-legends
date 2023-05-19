
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import { Link } from 'react-router-dom'

function BackButton() {
    return (
        <Link to="/champions">
            <button>
                <ArrowCircleLeftTwoToneIcon className='back-icon' />
            </button>
        </Link>
    )
}

export default BackButton