import axios from 'axios'
import React, { useState, useEffect} from 'react'

export const PokePage = ({setpokeCount, page_Number, page_Size,Url }) => {

    //const [Url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [Pokemons, setPokemons] = useState([])
    const [Loading, setLoading] = useState(true)


    

/*useEffect(() => {
    setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${page_Size}&offset=${page_Number}`)
    const fetchPokemon = async () => {
        /****************
        let cancel
    axios.get(Url, {
    canselToken: new axios.CancelToken( c => cancel = c )})
    .then(
        res=>{
            setpokeCount(res.data.count)
            setPokemons(res.data.results.map(p => p.name))
        }
    )
    return () => cancel()
}
*
        let cancel
        axios.get(Url, {
        canselToken: new axios.CancelToken( c => cancel = c )})
        .then(
            res=>{
            setpokeCount(res.data.count)
            setPokemons(res.data.results.map(p => p.name))
            )
        }
    }
    fetchPokemon()
}, [])*/

//setUrl('https://pokeapi.co/api/v2/pokemon?limit='+page_Size+'&offset='+page_Number)

useEffect(() => {
    //setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${page_Size}&offset=${page_Number}`)
    setLoading(true)
    let cancel
    axios.get(Url, {
    canselToken: new axios.CancelToken( c => cancel = c )})
    .then(
        res=>{
            setpokeCount(res.data.count)
            setPokemons(res.data.results.map(p => p.name))
        /*setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        TypeFiltre?
        setPokemons(res.data.results.map(p => p.name))
        :setPokemons(res.data.pokemon.map(p => p.pokemon.name))*/
        }
    )
    return () => cancel()
}, [Url])

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
