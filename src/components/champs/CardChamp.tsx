import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../redux/states'
import { AppDispatch } from '../../redux/store'
import { IChamps } from '../../types/champs.types'
import './CardChamp.css'

function CardChamp({ id, image, title }: IChamps) {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className='clippy'>

            <div key={id} className="">
                {/* <div className='card-champ-img'
                    style={{ backgroundImage: `url('${image}')` }}
                >
                </div> */}
                <div className='card-champ-id name'>{id}, </div>
                <div className='card-champ-id title'> {title}</div>
                <img src={image} alt={image} />
                <div className="border"></div>
            </div>
        </div>
    )
}

export default CardChamp