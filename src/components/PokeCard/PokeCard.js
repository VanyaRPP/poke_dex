import React, { useState, useEffect } from 'react'
import s from './stylePokeCard.module.css'
import axios from 'axios'
import PokeInfoModal from '../PokeInfoModal/PokeInfoModal'
import { render } from '@testing-library/react'

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
	water: '3295F6',
	unknown: '00BBCD',
	shadow: 'B8C0EA'
};

export default function PokeCard({p}) {
  
  
  const [PokeName, setPokeName] = useState(p)
  const [PokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon/'+ PokeName)
  const [PokeImg, setPokeImg] = useState(null)
  const [PokeID, setPokeID] = useState()
  const [PokeType, setPokeType] = useState([])
  const [PokeAbilities, setPokeAbilities] = useState([])
  const [PokeHeight, setPokeHeight] = useState()
  const [PokeBaseStats, setPokeBaseStats] = useState([])
  const [PokeStatsName, setPokeStatsName] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(PokeUrl)
    .then(
      res=>{
        setLoading(false)
        setPokeID(res.data.id)
        setPokeImg(res.data.sprites.front_default)
        setPokeHeight(res.data.height)
        setPokeType(res.data.types.map(pt => pt.type.name))
        setPokeBaseStats(res.data.stats.map(st=>st.base_stat))
        setPokeStatsName(res.data.stats.map(st=>st.stat.name))
      }
    )
  }, [PokeUrl])


  return (
    <div 
    style={{
      fontFamily:'Ranchers'
    }}
    className={s.pokecard}
    onClick={
      ()=>{
      render(
        <PokeInfoModal
          TYPE_COLORS={TYPE_COLORS}
          pName={PokeName}
          pUrl={PokeUrl}
          pType={PokeType}
          pID={PokeID}
          pImg={PokeImg}
          PokeAbilities={PokeAbilities}
          PokeHeight={PokeHeight}
          PokeBaseStats={PokeBaseStats}
          PokeStatsName={PokeStatsName}
          />)}}>
              
          <div className={s.CardHeader}>
            <div className={s.idDiv}>
              <p>
                {PokeID}
              </p>
            </div>
            <div className={s.nameDiv}>
              {PokeName.toUpperCase()}
            </div>
          </div>
            <img src={PokeImg}/>
              {PokeType.map(pot => (
              <div className={s.typeDiv} key={pot}>
                <p style={{color: `#${TYPE_COLORS[pot]}`}}>
                  {pot.toUpperCase()}
                </p>
              </div>
              ))}
            </div>
  )
}
