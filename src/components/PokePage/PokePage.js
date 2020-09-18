import { Spin } from 'antd'
import axios from 'axios'
import React, { useState, useEffect} from 'react'
import PokeCard from '../PokeCard/PokeCard'
import { PokeList } from '../PokeList/PokeList'

export const PokePage = ({ setpokeCount, Url, search, Type }) => {

    const [Pokemons, setPokemons] = useState([])
    const [Loading, setLoading] = useState(true)

useEffect(() => {
    setLoading(false)
    let cancel
    axios.get(Url, {
    canselToken: new axios.CancelToken( c => cancel = c )})
    .then(
        res=>{
            Type?
            setPokemons(res.data.pokemon.map(p => p.pokemon.name))
            :
            setPokemons(res.data.results.map(p => p.name))
            setpokeCount(res.data.count)
        }
    )
    return () => cancel()
}, [Url])

if (Loading) return <Spin size="large"/>
return (
<div>
    <PokeList 
        Pokemons={Pokemons}
        search={search}
    />
</div>
)
}
