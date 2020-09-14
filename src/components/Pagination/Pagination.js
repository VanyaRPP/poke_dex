import React from 'react'
import s from './Pagination.module.css'
import { Pagination } from 'antd'



export const Paginationn = ({pokeCount}) => {
    return (
        <div className={s.container}>
            <Pagination
            total={pokeCount}
            onShowSizeChange={onShowSizeChange}
            showTotal={(pokeCount, range) => `${range[0]}-${range[1]} of ${pokeCount} items`}
            defaultPageSize={20}
            defaultCurrent={1}
            />
        </div>
    )
}
