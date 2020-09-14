import React, { useState } from 'react'
import { Paginationn } from '../Pagination/Pagination'
import { PokePage } from '../PokePage/PokePage'
import { Searchh } from '../Search/Search'

export const Content = () => {

    const [pokeCount, setpokeCount] = useState()

    return (
        <div>
            <Searchh/>
            <PokePage
            setpokeCount={setpokeCount}
            
            />
            <Paginationn
            pokeCount={pokeCount}
            />
        </div>
    )
}
