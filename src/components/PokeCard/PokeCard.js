import React, { useState, useEffect } from 'react'
import s from './stylePokeCard.module.css'
import axios from 'axios'
import PokeInfoModal from '../PokeInfoModal/PokeInfoModal'
import { render } from '@testing-library/react'
import {TYPE_COLORS} from '../TypeColor'

export default function PokeCard({p}) {
  const [pokeName, setPokeName] = useState(p)
  const [pokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon/'+ pokeName)
  const [pokeImg, setPokeImg] = useState(null)
  const [pokeID, setPokeID] = useState()
  const [pokeType, setPokeType] = useState([])
  const [pokeAbilities, setPokeAbilities] = useState([])
  const [pokeHeight, setPokeHeight] = useState()
  const [pokeBaseStats, setPokeBaseStats] = useState([])
  const [pokeStatsName, setPokeStatsName] = useState([])
  
  useEffect(() => {
    axios.get(pokeUrl)
    .then(
      res=>{
        setPokeID(res.data.id)
        setPokeImg(res.data.sprites.front_default)
        setPokeHeight(res.data.height)
        setPokeType(res.data.types.map(pt => pt.type.name))
        setPokeBaseStats(res.data.stats.map(st=>st.base_stat))
        setPokeStatsName(res.data.stats.map(st=>st.stat.name))
      }
    )
  }, [pokeUrl])

  return (
    <div 
    className={s.pokecard}
    onClick={
      ()=>{
      render(
        <PokeInfoModal
          TYPE_COLORS={TYPE_COLORS}
          pName={pokeName}
          pUrl={pokeUrl}
          pType={pokeType}
          pID={pokeID}
          pImg={pokeImg}
          PokeAbilities={pokeAbilities}
          PokeHeight={pokeHeight}
          PokeBaseStats={pokeBaseStats}
          PokeStatsName={pokeStatsName}
        />)}}>
        <div className={s.CardHeader}>
          <div className={s.idDiv}>
            <p>
              {pokeID}
            </p>
          </div>
          <div className={s.nameDiv}>
            {pokeName.toUpperCase()}
          </div>
          </div>
          <img src={pokeImg}/>
          {pokeType.map(pot => (
            <div className={s.typeDiv} key={pot}>
              <p style={{color: `#${TYPE_COLORS[pot]}`}}>
                {pot.toUpperCase()}
              </p>
            </div>))
            }
    </div>
  )
}
