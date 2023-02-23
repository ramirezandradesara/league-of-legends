import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppStore } from '../../redux/store'
import { IChamps } from '../../types/champs.types'
import 'styles/CardChamp.scss'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Tooltip from '@mui/material/Tooltip';
import { splitName } from '../../helpers/splitName'
import { addFavorite, removeFavorite } from '../../redux/states'

/**
 * Component that display the card with the information of the champion
 */
function CardChamp({ id, image, title, tags }: IChamps): JSX.Element {

    const dispatch = useDispatch();
    const favorites = useSelector((store: AppStore) => store.favorites);
    const champs = useSelector((store: AppStore) => store.champs)

    const findFav = favorites?.find(fav => fav.id === id);
    const filterPerson = champs?.find(p => p.id === id);

    function manageFavorites() {
        if (findFav) {
            dispatch(removeFavorite(filterPerson))
        } else {
            dispatch(addFavorite(filterPerson))
        }
    }

    return (
        <li key={id} className='card_champ'>
            <Link to='/' className='card_champ_link'>
                <div className='card_champ_img'>
                    <img src={image} alt={image} />
                    <button
                        aria-label="add to favorites"
                        onClick={() => manageFavorites()}
                    >
                        {!findFav
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