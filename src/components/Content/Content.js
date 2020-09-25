import React, { useState, useEffect } from 'react'
import { BackTop, Collapse } from 'antd'
import CollapsePanel from 'antd/lib/collapse/CollapsePanel'
import { Paginationn } from '../Pagination/Pagination'
import { PokePage } from '../PokePage/PokePage'
import { Searchh } from '../Search/Search'
import { SelectorType } from '../SelectType/SelectType'

export const Content = () => {

    const [pokeCount, setpokeCount] = useState()
    const [page_Size, setpage_Size] = useState(20)
    const [page_Number, setpage_Number] = useState(0)
    const [search, setSearch] = useState('')
    const [Type, setType] = useState(false)
    const [TypeUrl, setTypeUrl] = useState('')
    const [Url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${page_Size}&offset=${page_Number}`)

    useEffect(() => {
        Type?
        setUrl(TypeUrl):
        search===''?setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${page_Size}&offset=${page_Number}`):
        setUrl('https://pokeapi.co/api/v2/pokemon?limit=1050&offset=0')
    })

function onShowSizeChange(pageSize) {
    setpage_Size(pageSize)
}
function onChange(pageNumber) {
    setpage_Number(pageNumber === 1 ? 0 :pageNumber*page_Size)
}
function ontypeClick(value){
    setType(true)
    setTypeUrl(value)
}
function onclearTypeClick(){
    setType(false)
}

    return (
        <div>
            <Searchh setSearch={setSearch}/>
            <Collapse ghost style={{ borderRadius:'20px',border:'2px solid violet'}}>
                <CollapsePanel header="Select Poke Type" key="1">
                    <SelectorType
                    ontypeClick={ontypeClick}
                    onclearTypeClick={onclearTypeClick}
                    />
                </CollapsePanel>
            </Collapse>
            {Type?null:
                <Paginationn
                    pokeCount={pokeCount}
                    onChange={onChange}
                    onShowSizeChange={onShowSizeChange}
                />
            }
            <PokePage
            setpokeCount={setpokeCount}
            page_Size={page_Size}
            page_Number={page_Number}
            Url={Url}
            Type={Type}
            search={search}
            />
            <BackTop>
                <p>Up</p>
            </BackTop>
        </div>
    )
}
