import { horizontalImageChamp } from 'helpers/apis';
import { useEffect, useState, useRef } from 'react'
import { Tooltip } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getChampData } from 'service/getChampData'
import 'styles/ChampDetails.scss'
import FavButton from './FavButton';
import Spells from './Spells';

function ChampDetails() {
  const [champData, setChampData] = useState([])
  const { id } = useParams();
  const [seeMore, setSeeMore] = useState(false)

  useEffect(() => {
    getChampData(id).then(data => setChampData(Object.values(data)))
  }, [id])

  const handleSeeMore = () => {
    setSeeMore(!seeMore)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])

  return (
    <div className='home'>
      <div className='champ_details'>
        <div className='champ_details_main' style={{ backgroundImage: `url('${horizontalImageChamp}${champData[0]?.id}_0.jpg')` }}>
          {/* <FavButton id={champData[0]?.id} /> */}
          <div className='champ_details_main_title'>
            <h2>{champData[0]?.title}</h2>
            <h1>{champData[0]?.id}</h1>
            <div className='champ_details_main_title_tags'>
              {/* {champData[0]?.tags.map((tag: string) => {
                return (
                  <Tooltip title={`${tag}`} key={`${tag}`} >
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
        </div>
        <div className='champ_details_info'>
          <div className='champ_details_info_lore'>
            <h3>LORE</h3>
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
            <h3>SPELLS</h3>
            <Spells
              passive={champData[0]?.passive?.image?.full}
              spellQ={champData[0]?.spells[0]?.image?.full}
              spellW={champData[0]?.spells[1]?.image?.full}
              spellE={champData[0]?.spells[2]?.image?.full}
              spellR={champData[0]?.spells[3]?.image?.full}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChampDetails