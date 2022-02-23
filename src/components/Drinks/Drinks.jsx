import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDrinks, isLoading, selectFilterDrinks } from '../../store/drinkSlice';
import "./Drinks.css"
import Drink from '../Drink/Drink'
import MyLoader from '../../features/Skeleton/Skeleton';
import { Spring, animated } from 'react-spring'

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
  
            <Spring 
             from={{opacity: 0}}
             to={{opacity: 1}}
             config={{duration: 1500}}>
                 {styles => (
                     <animated.div className='drinks' style={styles}>
                             {filterDrinks?.map(drink => {
                            return <Drink drink={drink}/>
             })}
           
                     </animated.div>
                 )}

            </Spring>
        
        
          
     
       
    )

}