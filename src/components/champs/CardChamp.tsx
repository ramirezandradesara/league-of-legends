import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { addFavorite } from '../../redux/states'
import { AppDispatch } from '../../redux/store'
import { IChamps } from '../../types/champs.types'
import './CardChamp.scss'

function CardChamp({ id, image, title }: IChamps) {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <div key={id} className='card_champ'>
            <Link to='/' className='card_champ_link'>

                <div className='card_champ_img'>
                    <img src={image} alt={image} />

                    <div className='card_champ_info'>
                        <div className='card_champ_info_name'>{id},</div>
                        <div className='card_champ_info_title'> {title}</div>
                    </div>
                </div>
            </Link>
        </div>

        // <li className='cards__item'>
        //     <Link className='cards__item__link' to='/home'  >
        //         <figure className='cards__item__pic-wrap'>
        //             <img src={image} alt={image} />

        //         </figure>

        //         <div className='cards__item__info'>
        //             <h5 className='cards__item__text'>ll</h5>
        //         </div>

        //     </Link>
        // </li>
    )
}

export default CardChamp