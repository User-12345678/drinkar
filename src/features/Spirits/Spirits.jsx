import React, {useState, useEffect} from 'react'
import AddDrink from '../addDrink/addDrink';
import "./Spirits.css"

export default function Sprits() {

    return (
        <div className='spirits'>
                <button>Gin</button>
                <button>Rom</button>
                <button>Vodka</button>
                <button>Whiskey</button>
                <AddDrink />     
        </div>
    )
        
    

}