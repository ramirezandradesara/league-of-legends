import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { AppDispatch, AppStore } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from 'redux/states';


function FavButton({ id }: { id: string }) {
    const dispatch = useDispatch<AppDispatch>();
    const favorites = useSelector((state: AppStore) => state.favorites)
    const esFavorito = favorites.find(fav => fav.id === id);

    function manageFavorites() {      
        // return !esFavorito
        //     ? dispatch(addFavorite(id))
        //     : dispatch(removeFavorite(id))
    };

    return (
        <button aria-label="add to favorites" onClick={() => manageFavorites()}>
            {!esFavorito
                ? <AiOutlineHeart className='fav-icon' />
                : <AiFillHeart className='fav-icon' />
            }
        </button>
    )
}

export default FavButton