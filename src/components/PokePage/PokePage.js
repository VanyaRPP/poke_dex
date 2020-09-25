import { Spin } from 'antd'
import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { PokeList } from '../PokeList/PokeList'

export const PokePage = ({ setpokeCount, Url, search, Type }) => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
        axios.get(Url)
        .then(
            res=>{
                Type?
                setPokemons(res.data.pokemon.map(p => p.pokemon.name))
                :
                setPokemons(res.data.results.map(p => p.name))
                setpokeCount(res.data.count)
            }
        )
    }, [Url])
    if (loading) return <Spin size="large"/>
    return (
        <div>
            <PokeList 
                Pokemons={pokemons}
                search={search}
            />
        </div>
    )
}
