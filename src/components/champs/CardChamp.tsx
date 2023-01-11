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

function CardChamp({ id, image, title }: IChamps) {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <div key={id} className='card_champ'>
            <Link to='/' className='card_champ_link'>
                <div className='card_champ_img'>
                    <img src={image} alt={image} />
                    {/* <div className="border"></div> */}
                    <AiOutlineHeart className='fav-icon' />

                    <div className='card_champ_info'>
                        <div className='card_champ_info_name'>{id}</div>
                        <div className='card_champ_info_title'> {title}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardChamp