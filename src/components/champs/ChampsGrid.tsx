
import CardChamp from 'components/champs/CardChamp';
import { useSelector } from 'react-redux';
import { AppStore } from 'redux/store';
import 'styles/ChampsGrid.scss'

function ChampsGrid(): JSX.Element {
  const champs = useSelector((state: AppStore) => state.champs)

  return (
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
  )
}

export default ChampsGrid