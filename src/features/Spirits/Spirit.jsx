import React,{useState} from 'react'
import { addFilter, removeFilter } from '../../store/drinkSlice'
import { useDispatch } from 'react-redux';


import "./Spirits.css"


export default function Sprit(props) {
    const dispatch = useDispatch()
    const [isSelected, setSelected] = useState(false);

    const {spirit} = props; 


    return (
         <button className="spiritButton" key={spirit} value={isSelected} onClick={() => dispatch( isSelected ?  removeFilter(spirit) :addFilter(spirit) , setSelected(!isSelected))} > {spirit} </button>  
    )
}