import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../../redux/states'
import { AppDispatch, AppStore } from '../../redux/store'
import { IChamps } from '../../types/champs.types'
// import './CardChamp.css'

function CardChamp({ id, image, title }: IChamps) {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <div key={id} className="card-champ">

                <div className="card-champ-content" >
                    <div>{id}</div>
                    <div className='card-champ-img'></div>
                    <button onClick={() => dispatch(addFavorite(id))} >
                        (L)
                    </button>
                </div>
            </div>
        </>
    )
}

export default CardChamp