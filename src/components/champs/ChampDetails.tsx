import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getChampData } from 'service/getChampData'
import 'styles/ChampDetails.scss'

function ChampDetails() {
  const [champData, setChampData] = useState([])
  console.log("🚀 ~ file: ChampDetails.tsx:6 ~ ChampDetails ~ champData:", champData)
  const { id } = useParams();

  useEffect(() => {
    getChampData(id).then(data => setChampData(Object.values(data)))
  }, [id])

  return (
    <div className='home'>
      <div className='champ_details'>
        <div className='champ_details_main' style={{ backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champData[0]?.id}_0.jpg')` }}>
          <div className='champ_details_main_title'>
            <div>{champData[0]?.title}</div>
            <div style={{ fontSize: '80px' }}>{champData[0]?.id}</div>
          </div>
        </div>
        <div className='champ_details_main_info'>

        </div>

      </div>
    </div>
  )
}

export default ChampDetails