import React, { useEffect } from 'react'
import { getChamps } from '../../service/getChamps'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, setChamps } from '../../redux/states';
import { AppDispatch, AppStore } from '../../redux/store';


function ChampsGrid() {
  const dispatch = useDispatch<AppDispatch>();
  // const favorites = useSelector((state: AppStore) => state.favorites)
  const champs = useSelector((state: AppStore) => state.champs)

  /**
   * When the components renders, it gets the champions of the API and set them in the champs state
   */
  useEffect(() => {
    getChamps().then(data => dispatch(setChamps(Object.values(data))))
  }, [dispatch])

  return (
    <>
      <div>ChampsGrid</div>
      <div>
        {champs.map(c => {
          return (
            <div key={c.id}>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${c.id}_0.jpg`}
                alt="" />
              <span>{c.id}, </span>
              <span>{c.title}</span>
              <button
                onClick={() => dispatch(addFavorite(c.id))}
              >
                Fav
              </button>
              <br />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ChampsGrid