import { AppStore } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from 'redux/states';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';


function FavButton({ id }: { id: string }) {
    const dispatch = useDispatch();
    const favorites = useSelector((store: AppStore) => store.favorites);
    const champs = useSelector((store: AppStore) => store.champs)

    const findFav = favorites?.find(fav => fav.id === id);
    const filterPerson = champs?.find(p => p.id === id);

    function manageFavorites() {
        findFav
            ? dispatch(removeFavorite(filterPerson))
            : dispatch(addFavorite(filterPerson))
    }

    return (
        <button
            aria-label="add to favorites"
            onClick={() => manageFavorites()}
        >
            {!findFav
                ? <FavoriteTwoToneIcon className='fav-icon'/>
                : <FavoriteIcon className='fav-icon' />
            }
        </button>
    )
}

export default FavButton