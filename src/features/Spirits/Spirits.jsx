import React,{useState} from 'react'
import Spirit from './Spirit'

import "./Spirits.css"


export default function Sprits() {


    const array = ["Rom", "Gin", "Amaretto", "Tequila", "Vodka", "Whiskey"]

    return (

        <div className='spirits'>
            {array.map(toMap => {
                return <Spirit spirit={toMap} />
            })}
  
          
        </div>
    )
}