
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)}>
            <ArrowCircleLeftTwoToneIcon className='back-icon' />
        </button>
    )
};

export default BackButton