import React, {useState, useEffect} from 'react'
import Ingredients from "../Ingredients/Ingredients"
import "./Drink.css"

export default function Drink(props) {

    const getImage = (image) => {
        if(image.startsWith("https:")) {
            return image;
        }
        return require(image);
    }

    const {drink} = props;

    return (
        <div className='drink' key={drink.name}>
            <p className='drinkName'>{drink.name}</p>
            <img src={drink.img} alt={drink.name}/>
            <Ingredients ingredient={drink.ingredients} />
        </div> 
    )
}