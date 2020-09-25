import React, {useState} from 'react'
import s from './Search.module.css'
import { Input } from 'antd'


export const Searchh = ({ setSearch }) => {

    return (
        <div className={s.container}>
            <Input
                className={s.search}
                placeholder="Search Pokemon"
                onChange={
                    e=>(
                        setSearch(e.target.value.toLowerCase())
                    )
                }
            />
        </div>
    )
}
