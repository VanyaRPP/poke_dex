import React from 'react'
import s from './Pagination.module.css'
import { Pagination } from 'antd'



export const Paginationn = ({pokeCount, onShowSizeChange, onChange}) => {
    return (
        <div className={s.container}>
            <Pagination
                defaultCurrent={0}
                showSizeChanger
                pageSizeOptions={[10,20,50,100]}
                defaultPageSize={20}
                total={pokeCount}
                onShowSizeChange={onShowSizeChange}
                onChange={onChange}
                showTotal={(pokeCount, range) => `${range[0]}-${range[1]} of ${pokeCount} Pokemon`}
            />
        </div>
    )
}
