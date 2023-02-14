import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { addFavorite, removeFavorite } from '../../../redux/states'
import { AppDispatch, AppStore } from '../../../redux/store'
import { IChamps } from '../../../types/champs.types'
import './CardChamp.scss'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Tooltip from '@mui/material/Tooltip';
import FavButton from '../FavButton/FavButton'
import { splitName } from '../../../helpers/splitName'

/**
 * Component that display the card with the information of the champion
 */
function CardChamp({ id, image, title, tags }: IChamps): JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const favorites = useSelector((state: AppStore) => state.favorites)
    const champs = useSelector((state: AppStore) => state.champs)
    const findFavorite = (person: IChamps) => favorites.find(p => p.id === person.id);
    const findChamp = (person: IChamps) => champs.find(p => p.id === person.id); 

    function manageFavorites() {
        !findFavorite
            ? dispatch(addFavorite())
            : dispatch(removeFavorite({ id, image, title, tags }))
    };

    return (
        <li key={id} className='card_champ'>
            <Link to='/' className='card_champ_link'>
                <div className='card_champ_img'>
                    <img src={image} alt={image} />
                    <button aria-label="add to favorites" onClick={() => manageFavorites()}>
                        {!findFavorite
                            ? <AiOutlineHeart className='fav-icon' />
                            : <AiFillHeart className='fav-icon' />
                        }
                    </button>
                    <div className='card_champ_info'>
                        <div className='card_champ_info_name'>{splitName(id)}</div>
                        <div className='card_champ_info_title'> {title}</div>
                        <div className='card_champ_info_tags'>
                            {tags.map(tag => {
                                return (
                                    <Tooltip title={`${tag}`} arrow key={`${tag}`} >
                                        <img
                                            src={`/tags/${tag}.png`}
                                            alt={`${id + tag}`}
                                            key={`${id + tag}`}
                                        // title={`${tag}`}
                                        />
                                    </Tooltip>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default CardChamp