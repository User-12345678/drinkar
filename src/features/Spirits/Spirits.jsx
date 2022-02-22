import React,{useState} from 'react'
import { addFilter, removeFilter } from '../../store/drinkSlice'
import { useDispatch, useSelector } from 'react-redux';

import "./Spirits.css"


export default function Sprits() {
    const dispatch = useDispatch()
    const [isSelected, setSelected] = useState(false);

    return (

        <div className='spirits'>
            <button  value={isSelected} onClick={() => dispatch( isSelected ?  removeFilter('Gin') :addFilter('Gin') , setSelected(!isSelected))} > Gin </button>
            <button onClick={() => dispatch(addFilter('Rom'))} value="Gin"> Rom </button>
            <button onClick={() => dispatch(addFilter('Amaretto'))} value="Gin"> Amaretto </button>
            <button onClick={() => dispatch(addFilter('Tequila'))} value="Gin"> Tequila </button>
            <button onClick={() => dispatch(addFilter('Vodka'))} value="Gin"> Vodka </button>
            <button onClick={() => dispatch(addFilter('Whiskey'))} value="Gin"> Whiskey </button>
          
        </div>
    )
}