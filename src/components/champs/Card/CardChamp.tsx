import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { addFavorite, removeFavorite } from '../../../redux/states'
import { AppDispatch, AppStore } from '../../../redux/store'
import { IChamps } from '../../../types/champs.types'
import './CardChamp.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import Tooltip from '@mui/material/Tooltip';
import FavButton from '../FavButton/FavButton'

/**
 * Component that display the card with the information of the champion
 */
function CardChamp({ id, image, title, tags }: IChamps): JSX.Element {
    const dispatch = useDispatch<AppDispatch>();

    function splitName(name: string) {
        return name.split(/(?=[A-Z])/).join(" ")
    };

    return (
        <li key={id} className='card_champ'>
            <Link to='/' className='card_champ_link'>
                <div className='card_champ_img'>
                    <img src={image} alt={image} />
                    <FavButton
                        id={id}
                    />
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