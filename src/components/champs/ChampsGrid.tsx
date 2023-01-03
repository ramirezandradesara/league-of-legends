import React, { useEffect, useState } from 'react'
import { getChamps } from '../../service/getChamps'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../redux/states';
import { AppStore } from '../../redux/store';

function ChampsGrid() {
  const dispatch = useDispatch();
  const [champs, setChamps] = useState([])

  const favoritos = useSelector((state: AppStore) => state.favorites)
  console.log("🚀 ~ file: ChampsGrid.tsx:13 ~ ChampsGrid ~ favoritos", favoritos)

  useEffect(() => {
    getChamps().then(data => setChamps(Object.values(data)))
  }, [])

  const handleFav = (id: string) => {
    dispatch(addFavorite(id));
  }

  return (
    <>
      <div>ChampsGrid</div>
      <div>
        {champs?.map(c => {
          return (
            <div key={c.id}>
              <span>{c.id}, </span>
              <span>{c.title}</span>
              <button onClick={() => handleFav(c.id)}>Fav</button>
              <br />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ChampsGrid