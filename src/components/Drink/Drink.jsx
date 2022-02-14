import React,{useState} from 'react'
import Ingredients from "../Ingredients/Ingredients"
import "./Drink.css"
import Description from '../Description/Description';
import Skeleton from 'react-loading-skeleton'


export default function Drink(props) {
    

    const [showDescription, setShow] = useState(false);


    const {drink} = props;

    return (
        <div className='drink' key={drink.name}>
            <p className='drinkName'>{drink.name || <Skeleton />}</p>
            <img src={drink.img || <Skeleton />} alt={drink.name}/>
            <Ingredients ingredient={drink.ingredients} />
            { showDescription?  <Description description={drink.description} className='description' /> : null }
            <div className="buttonHolder">
            { !showDescription && drink.description ? <button className='drinkButton'  onClick={() => setShow(true)}> Visa mer info</button> : null}
            { showDescription ? <button className='drinkButton'  onClick={() => setShow(false)}> Visa mindre info</button> : null}
            </div>
        </div> 
    )
}