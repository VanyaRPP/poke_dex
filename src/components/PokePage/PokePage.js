import axios from 'axios'
import React, { useState, useEffect} from 'react'

export const PokePage = ({setpokeCount}) => {

    
    const [Pokemons, setPokemons] = useState([])

useEffect(() => {
    const fetchPokemon = async () => {
        const res = await axios (
            'https://pokeapi.co/api/v2/pokemon',
        )
        setpokeCount(res.data.count)
        setPokemons(res.data.results.map(p => p.name))
    }

    fetchPokemon()

}, [])

    return (
//        console.log(props.pokeCount),
        <div>
            {
                Pokemons.map(
                    p=>(
                        <li key={p}>
                            {p}
                        </li>
                    )
                )
            }
        </div>
    )
}
