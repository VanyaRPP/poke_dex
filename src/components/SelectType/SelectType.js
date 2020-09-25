import React, { useEffect,useState} from 'react'
import { Button } from 'antd'
import s from './SelectType.module.css'
import axios from 'axios'
import {TYPE_COLORS} from '../TypeColor'

export const SelectorType = ({ ontypeClick, onclearTypeClick }) => {
	const allTyprURL='https://pokeapi.co/api/v2/type'
	const [type, setType] = useState([])
	useEffect(() => {
		axios.get(allTyprURL)
		.then(
			res=>{
				setType(res.data.results)
			}
		)
	}, [allTyprURL])

	return (
		<div>
			<Button
				className={s.Defolt}
				onClick={()=>(onclearTypeClick())}
			>
				&times;
			</Button>
			{type.map(tName=>(
				<Button
					className={s.Defolt}
					style={{background: `#${TYPE_COLORS[tName.name]}`}}
					onClick={()=>ontypeClick(tName.url)}
				>
					{tName.name}
				</Button>))
			}
		</div>
	)
}
