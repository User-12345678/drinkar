import React,{useState} from 'react'
import Ingredients from "../Ingredients/Ingredients"
import "./Drink.css"
import Description from '../Description/Description';

export default function Drink(props) {

    const [showDescription, setShow] = useState(false);


    const {drink} = props;

    return (
        <div className='drink' key={drink.name}>
            <p className='drinkName'>{drink.name}</p>
            <img src={drink.img} alt={drink.name}/>
            <Ingredients ingredient={drink.ingredients} />
            { showDescription?  <Description description={drink.description} className='description' /> : null }
            { !showDescription && drink.description ? <button className='drinkButton'  onClick={() => setShow(true)}> Visa mer info</button> : null}
            { showDescription ? <button className='drinkButton'  onClick={() => setShow(false)}> Visa mindre info</button> : null}
        </div> 
    )
}