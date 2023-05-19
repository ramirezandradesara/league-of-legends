import { horizontalImageChamp } from 'helpers/apis';
import { useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import { useParams } from 'react-router-dom';
import { getChampData } from 'service/getChampData'
import 'styles/ChampDetails.scss'
import FavButton from 'components/buttons/FavButton';
import Spells from './Spells';
import { SwiperSkins } from 'components/swiper/Swiper';
import BackButton from 'components/buttons/BackButton';

function ChampDetails() {
  const [champData, setChampData] = useState([])
  const { id }: { id?: string } = useParams();
  const [seeMore, setSeeMore] = useState<boolean>(false)

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
      <div id="back-to-top-anchor"></div>
      <div className='champ_details'>
        <div className='champ_details_main' style={{ backgroundImage: `url('${horizontalImageChamp}${champData[0]?.id}_0.jpg')` }}>
          <BackButton />
          <FavButton id={champData[0]?.id} />
          <div className='champ_details_main_title'>
            <h2>{champData[0]?.title}</h2>
            <h1>{champData[0]?.id}</h1>
            <div className='champ_details_main_title_tags'>
              {champData[0]?.tags.map((tag: string) => {
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
        <div className='champ_details_info'>
          <div className='champ_details_info_lore'>
            <h3>LORE</h3>
            <p className='champ_details_info_lore_p'>
              {!seeMore ? champData[0]?.blurb : champData[0]?.lore}
              <button onClick={handleSeeMore}>
                {!seeMore ? 'SEE MORE' : 'SEE LESS'}
              </button>
            </p>
          </div>
          <div className='champ_details_info_spells'>
            <h3>SPELLS</h3>
            <Spells
              passive={champData[0]?.passive?.image?.full}
              spellQ={champData[0]?.spells[0]?.image?.full}
              spellW={champData[0]?.spells[1]?.image?.full}
              spellE={champData[0]?.spells[2]?.image?.full}
              spellR={champData[0]?.spells[3]?.image?.full}
              descriptionP={champData[0]?.passive?.description}
              descriptionQ={champData[0]?.spells[0]?.description}
              descriptionW={champData[0]?.spells[1]?.description}
              descriptionE={champData[0]?.spells[2]?.description}
              descriptionR={champData[0]?.spells[3]?.description}
              passiveName={champData[0]?.passive?.name}
              nameQ={champData[0]?.spells[0]?.name}
              nameW={champData[0]?.spells[1]?.name}
              nameE={champData[0]?.spells[2]?.name}
              nameR={champData[0]?.spells[3]?.name}
            />
          </div>
          <div className='champ_details_info_skins'>
            <h3>SKINS</h3>
            <SwiperSkins
              champion={champData[0]?.id}
              skins={champData[0]?.skins}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChampDetails