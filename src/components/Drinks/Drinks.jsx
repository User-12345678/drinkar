import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDrinks, isLoading, selectFilterDrinks} from '../../store/drinkSlice';
import "./Drinks.css"
import Drink from '../Drink/Drink'


export default function Drinks(){

    const dispatch = useDispatch();
    const isDrinkLoading = useSelector(isLoading);
    const filterDrinks = useSelector(selectFilterDrinks)
    
    

    useEffect(() => {
         dispatch(loadDrinks());
    },[dispatch])


    if(isDrinkLoading){
        return (
            <div className='empty'></div>
        )
    }

    return (
            <div className='drinks'>
                {filterDrinks?.map(drink => {
                return <Drink drink={drink}/>}
                )}
            </div>        
    )
}