import React, { useEffect } from 'react'
import { getChamps } from '../../../service/getChamps'
import { useDispatch, useSelector } from 'react-redux';
import { setChamps } from '../../../redux/states';
import { AppDispatch, AppStore } from '../../../redux/store';
import CardChamp from '../Card/CardChamp';
import './ChampsGrid.scss'

function ChampsGrid(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const champs = useSelector((state: AppStore) => state.champs)

  /**
   * When the components renders, it gets the champions of the API and set them in the champs state
   */
  useEffect(() => {
    getChamps().then(data => dispatch(setChamps(Object.values(data))))
  }, [dispatch])

  return (
      <ul className="champs_grid">
        {champs.map(c => {
          return (
              <CardChamp
                key={c.id}
                id={c.id}
                image={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${c.id}_0.jpg`}
                title={c.title}
                tags={c.tags}
              />
          )
        })}
      </ul>
  )
}

export default ChampsGrid