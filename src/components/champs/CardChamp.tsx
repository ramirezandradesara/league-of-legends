import { Link } from 'react-router-dom'
import { IChamps } from 'types/champs.types'
import 'styles/CardChamp.scss'
import Tooltip from '@mui/material/Tooltip';
import { splitName } from 'helpers/splitName'
import FavButton from 'components/buttons/FavButton'
import { useEffect, useRef, useState } from 'react';

/**
 * Component that display the card with the information of the champion
 */
function CardChamp({ id, image, title, tags }: IChamps): JSX.Element {

    const elementoRef = useRef()
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        const elemento = elementoRef.current
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIsIntersecting(entry.isIntersecting)
            })
        },
            {
                threshold: 0.5
            }
        )

        if (elemento) {
            observer.observe(elemento)
        }

    }, [])


    return (
        <li key={id} className={`card_champ ${isIntersecting ? 'show' : 'hidden'}`} ref={elementoRef}>
            <div className='card_champ_img'>
                <Link to={`/champions/${id}`} className='card_champ_link' id={id}>
                    <img src={image} alt={image} />
                </Link>
                <FavButton id={id} />
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
                                    />
                                </Tooltip>
                            )
                        })}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CardChamp