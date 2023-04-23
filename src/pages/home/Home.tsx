import ChampsGrid from 'components/champs/ChampsGrid'
import 'styles/Home.scss'

function Home() {

  return (
    <div className='home'>
      <h1 className='home_title'>Champions</h1>
      <ChampsGrid />
    </div>
  )
}

export default Home