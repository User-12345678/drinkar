import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import "./Spirits.css"
import { loadDrinks } from '../../store/drinkSlice';

export default function Sprits() {
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(loadDrinks());
    },[dispatch])

    return (

        <div className='spirits'>
          
        </div>
    )
}