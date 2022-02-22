import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDrinks, isLoading, selectOrderDrinks, selectFilterDrinks } from '../../store/drinkSlice';
import "./Drinks.css"
import Drink from '../Drink/Drink'
import MyLoader from '../../features/Skeleton/Skeleton';

export default function Drinks(){

    const dispatch = useDispatch();
    const isDrinkLoading = useSelector(isLoading);
    const sortedDrinks = useSelector(selectOrderDrinks);
    const filterDrinks = useSelector(selectFilterDrinks)


    
    useEffect(() => {
         dispatch(loadDrinks());
    },[dispatch])


    if(isDrinkLoading){
        return (
            <div className='drinks'>
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
            </div>
           
        )
           

      
    }

    return (
        <div className='drinks'>
                {filterDrinks?.map(drink => {
                 return <Drink drink={drink}/>
             })}
        </div>
       
    )

}