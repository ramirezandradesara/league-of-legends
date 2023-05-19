import ChampsGrid from 'components/champs/ChampsGrid'
import { useEffect } from 'react'
import { getChamps } from 'service/getAllChamps'
import { useDispatch } from 'react-redux';
import { setChamps } from 'redux/states';
import { AppDispatch } from 'redux/store';
import 'styles/Home.scss'
import { ChampsFilter } from 'components/champs/ChampsFilter';

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  /**
 * When the components renders, it gets all the champions of the API and set them in the champs state
 */
  useEffect(() => {
    getChamps().then(data => dispatch(setChamps(Object.values(data))))
  }, [dispatch])

  return (
    <div className='home'>
      <h1 className='home_title' id="back-to-top-anchor">Champions</h1>
      <ChampsFilter />
      <ChampsGrid />
    </div>
  )
}

export default Home