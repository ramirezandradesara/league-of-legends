import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getChampData } from 'service/getChampData'

function ChampDetails() {
  const [champData, setChampData] = useState([])
  console.log("🚀 ~ file: ChampDetails.tsx:6 ~ ChampDetails ~ champData:", champData[0]?.id)
  const { id } = useParams();

  useEffect(() => {
    getChampData(id).then(data => setChampData(Object.values(data)))
  }, [id])

  return (
    <div>ChampDetails</div>
  )
}

export default ChampDetails