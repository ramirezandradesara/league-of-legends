import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { AppStore } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from 'redux/states';


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
                ? <AiOutlineHeart className='fav-icon' />
                : <AiFillHeart className='fav-icon' />
            }
        </button>
    )
}

export default FavButton