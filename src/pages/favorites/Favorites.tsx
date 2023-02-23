import CardChamp from 'components/champs/CardChamp'
import { useSelector } from 'react-redux'
import { AppStore } from 'redux/store'

function Favorites() {

  const favorites = useSelector((state: AppStore) => state.favorites)

  /**
   * When the components renders, it gets the champions of the API and set them in the champs state
   */

  return (
    <div className='home'>
      <ul className="champs_grid">
        {favorites.map(c => {
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
    </div>
  )
}

export default Favorites