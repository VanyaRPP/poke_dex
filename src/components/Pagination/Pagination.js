import React, {useState} from 'react'
import s from './Pagination.module.css'
import { Pagination } from 'antd'

export const Paginationn = ({onShowSizeChange, onChange}) => {
    return (
            <div className={s.container}>
                <Pagination
                    defaultCurrent={1}
                    defaultPageSize={20}
                    total={1050}
                    showSizeChanger
                    pageSizeOptions={[10,20,50,100]}
                    onShowSizeChange={onShowSizeChange}
                    onChange={onChange}
                    showTotal={(pokeCount, range) => `${range[0]}-${range[1]} of ${pokeCount} Pokemon`}
                />
            </div>
        )
}

