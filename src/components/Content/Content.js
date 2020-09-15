import React, { useState, useEffect } from 'react'
import { Paginationn } from '../Pagination/Pagination'
import { PokePage } from '../PokePage/PokePage'
import { Searchh } from '../Search/Search'

export const Content = () => {

    const [pokeCount, setpokeCount] = useState()
    const [page_Size, setpage_Size] = useState(20)
    const [page_Number, setpage_Number] = useState()
    const [Url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${page_Size}&offset=${page_Number}`)

    useEffect(() => {
        setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${page_Size}&offset=${page_Number}`)
    });

function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
    setpage_Number(pageNumber*page_Size)
    console.log('ofset: ', page_Number)
    //setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${page_Size-1}&offset=${page_Number}`)
}
function onShowSizeChange(current, pageSize) {
    setpage_Size(pageSize)
    console.log(current, pageSize)
    console.log(page_Size)
    //setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${page_Size-1}&offset=${page_Number}`)
}

    return (
        <div>
            <Searchh/>
            <PokePage
            setpokeCount={setpokeCount}
            page_Size={page_Size}
            page_Number={page_Number}
            Url={Url}
            />
            <Paginationn
            pokeCount={pokeCount}
            onChange={onChange}
            onShowSizeChange={onShowSizeChange}
            />
        </div>
    )
}
