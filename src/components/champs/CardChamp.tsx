import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { addFavorite } from '../../redux/states'
import { AppDispatch } from '../../redux/store'
import { IChamps } from '../../types/champs.types'
import './CardChamp.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FaArrowCircleRight } from 'react-icons/fa'
import { HiArrowCircleRight } from 'react-icons/hi'

/**
 * Component that display the card with the information of the champion
 */
function CardChamp({ id, image, title, tags }: IChamps) {

    const dispatch = useDispatch<AppDispatch>();

    function splitName (name: string) {
        return name.split(/(?=[A-Z])/).join(" ")
    }

    return (
        <div key={id} className='card_champ'>
            <Link to='/' className='card_champ_link'>
                <div className='card_champ_img'>
                    <img src={image} alt={image} />
                    <AiOutlineHeart className='fav-icon' />
                    <div className='card_champ_info'>
                        <div className='card_champ_info_name'>{splitName(id)}</div>
                        <div className='card_champ_info_title'> {title}</div>
                        <div className='card_champ_info_tags'>
                            {tags.map(tag => {
                                return (
                                    <img
                                        src={`/tags/${tag}.png`}
                                        alt={`${tag}`}
                                        title={`${tag}`}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardChamp