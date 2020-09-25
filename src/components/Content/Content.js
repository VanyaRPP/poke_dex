import React, { useState, useEffect } from 'react'
import { BackTop, Collapse } from 'antd'
import CollapsePanel from 'antd/lib/collapse/CollapsePanel'
import { Paginationn } from '../Pagination/Pagination'
import { PokePage } from '../PokePage/PokePage'
import { Searchh } from '../Search/Search'
import { SelectorType } from '../SelectType/SelectType'
import s from './Content.module.css'

export const Content = () => {
    const [pokeCount, setpokeCount] = useState()
    const [page_Size, setpage_Size] = useState(20)
    const [page_Number, setpage_Number] = useState(0)
    const [search, setSearch] = useState('')
    const [type, setType] = useState(false)
    const [typeUrl, setTypeUrl] = useState('')
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${page_Size}&offset=${page_Number}`)

    useEffect(() => {
        type?
        setUrl(typeUrl):
        search===''?setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${page_Size}&offset=${page_Number}`):
        setUrl('https://pokeapi.co/api/v2/pokemon?limit=1050&offset=0')
    })

    const onShowSizeChange=(pageSize)=>{
        setpage_Size(pageSize)
    }
    const onChange=(pageNumber)=>{
        setpage_Number(pageNumber === 1 ? 0 :pageNumber*page_Size)
    }
    const ontypeClick=(value)=>{
        setType(true)
        setTypeUrl(value)
    }
    const onclearTypeClick=()=>{
        setType(false)
    }

    return (
        <div>
            <Searchh setSearch={setSearch}/>
            <Collapse className={s.collaps} ghost>
                <CollapsePanel header="Select Poke Type" key="1">
                    <SelectorType
                        ontypeClick={ontypeClick}
                        onclearTypeClick={onclearTypeClick}
                    />
                </CollapsePanel>
            </Collapse>
            {type?null:
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
                Url={url}
                Type={type}
                search={search}
            />
            <BackTop>
                <p>Up</p>
            </BackTop>
        </div>
    )
}
