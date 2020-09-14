import React from 'react'
import s from './Search.module.css'
import { Input } from 'antd'


const { Search } = Input;

export const Searchh = () => {
    return (
        <>
            <Search
                className={s.search}
                placeholder="input search text"
                onSearch={value => console.log(value)}
                onChange={value => console.log(value)}
            />
        </>
    )
}
