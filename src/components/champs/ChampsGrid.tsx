
import CardChamp from 'components/champs/CardChamp';
import { useSelector } from 'react-redux';
import { AppStore } from 'redux/store';
import 'styles/ChampsGrid.scss'

function ChampsGrid(): JSX.Element {
  const champs = useSelector((state: AppStore) => state.champs)

  return (
    <>
      {champs.length === 0
        ? <div className='no_fav_container'>
          <img src="/gifs/blitzcrank.gif" height={200} alt="no results gif" />
          <h2>No matches found</h2>
        </div>
        : <>
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
        </>
      }
    </>
  )
}

export default ChampsGrid