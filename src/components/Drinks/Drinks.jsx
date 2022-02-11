import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDrinks,selectAllDrinks, isLoading } from '../../store/drinkSlice';
import "./Drinks.css"
import Drink from '../Drink/Drink'

export default function Drinks(){

    const dispatch = useDispatch();
    const drinks = useSelector(selectAllDrinks);
    const isDrinkLoading = useSelector(isLoading);



    useEffect(() => {
        dispatch(loadDrinks());
    },[dispatch])

    if(isDrinkLoading){
        return( <p>Loading</p> )
    }

    return (
        <div className='drinks'>
                {drinks.drinks?.map(drink => {
                 return <Drink drink={drink}/>
             })}
        </div>
       
    )

}