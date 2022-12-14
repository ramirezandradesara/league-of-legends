import React, { useEffect } from 'react'
import { getChamps } from '../../service/getChamps'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, setChamps } from '../../redux/states';
import { AppDispatch, AppStore } from '../../redux/store';
import CardChamp from './CardChamp';
import './ChampsGrid.css'

function ChampsGrid() {
  const dispatch = useDispatch<AppDispatch>();
  const champs = useSelector((state: AppStore) => state.champs)
  console.log("🚀 ~ file: ChampsGrid.tsx:12 ~ ChampsGrid ~ champs", champs)

  /**
   * When the components renders, it gets the champions of the API and set them in the champs state
   */
  useEffect(() => {
    getChamps().then(data => dispatch(setChamps(Object.values(data))))
  }, [dispatch])

  return (
    <>
      <div className="container">
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
      </div>
    </>
  )
}

export default ChampsGrid