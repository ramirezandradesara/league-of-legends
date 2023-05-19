import CardChamp from 'components/champs/CardChamp'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppStore } from 'redux/store'
import 'styles/Favorites.scss'

function Favorites() {
  const favorites = useSelector((state: AppStore) => state.favorites)

  return (
    <div className='home'>
      <h1 className='home_title' id="back-to-top-anchor">Favorites</h1>
      {favorites.length === 0
        ? <div className='no_fav_container'>
          <img src='/tags/poro.png' alt="no favorites" />
          <h2>One of them must be your favorite</h2>
          <p>
            Find them in the <Link to='/'>home page</Link>
          </p>
        </div>
        : <ul className="champs_grid">
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
      }
    </div>
  )
}

export default Favorites