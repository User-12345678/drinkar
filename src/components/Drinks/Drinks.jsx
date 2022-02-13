import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDrinks, isLoading, selectOrderDrinks } from '../../store/drinkSlice';
import "./Drinks.css"
import Drink from '../Drink/Drink'

export default function Drinks(){

    const dispatch = useDispatch();
    const isDrinkLoading = useSelector(isLoading);
    const sortedDrinks = useSelector(selectOrderDrinks);



    useEffect(() => {
        dispatch(loadDrinks());
    },[dispatch])

    if(isDrinkLoading){
        return( <p>Loading</p> )
    }

    return (
        <div className='drinks'>
            {console.log( sortedDrinks)}
                {sortedDrinks?.map(drink => {
                 return <Drink drink={drink}/>
             })}
        </div>
       
    )

}