import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddDrink from '../addDrink/addDrink';
import "./Spirits.css"
import { filterLiquor, selectAllDrinks,loadDrinks } from '../../store/drinkSlice';

export default function Sprits() {
    const dispatch = useDispatch();
    const drinks = useSelector(selectAllDrinks)

    useEffect(() => {
        dispatch(loadDrinks());
    },[dispatch])

    return (


        
        <div className='spirits'>
                <button onClick={() => filterLiquor(drinks,"Gin")}>Gin</button>
                <button>Rom</button>
                <button>Vodka</button>
                <button >Whiskey</button>
                <AddDrink />     
        </div>
    )
}