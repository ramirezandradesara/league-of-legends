import { useEffect, useState } from 'react'
import { Tooltip } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getChampData } from 'service/getChampData'
import 'styles/ChampDetails.scss'
import FavButton from './FavButton';

function ChampDetails() {
  const [champData, setChampData] = useState([])
  console.log("🚀 ~ file: ChampDetails.tsx:6 ~ ChampDetails ~ champData:", champData)
  const { id } = useParams();
  const [seeMore, setSeeMore] = useState(false)

  useEffect(() => {
    getChampData(id).then(data => setChampData(Object.values(data)))
  }, [id])

  const handleSeeMore = () => {
    setSeeMore(!seeMore)
  }

  return (
    <div className='home'>
      <div className='champ_details'>
        <div className='champ_details_main' style={{ backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champData[0]?.id}_0.jpg')` }}>
          {/* <FavButton id={champData[0]?.id} /> */}
          <div className='champ_details_main_title'>
            <div>{champData[0]?.title}</div>
            <div style={{ fontSize: '80px' }}>{champData[0]?.id}</div>
            {/* {champData[0]?.tags.map((tag: string) => {
              return (
                <Tooltip title={`${tag}`}  key={`${tag}`} >
                  <img
                    src={`/tags/${tag}.png`}
                    alt={`${id + tag}`}
                    key={`${id + tag}`}
                  // title={`${tag}`}
                  />
                </Tooltip>
              )
            })} */}
          </div>
        </div>
        <div className='champ_details_info'>
          <div className='champ_details_info_lore'>
            LORE
            {!seeMore ?
              (<p className='champ_details_info_lore_p'>
                {champData[0]?.blurb}
                <button onClick={handleSeeMore}>
                  SEE MORE
                </button>
              </p>)
              : (
                <p className='champ_details_info_lore_p'>
                  {champData[0]?.lore}
                  <button onClick={handleSeeMore}>
                    SEE LESS
                  </button>
                </p>
              )
            }

          </div>
          <div className='champ_details_info_spells'>
            SPELLS
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChampDetails