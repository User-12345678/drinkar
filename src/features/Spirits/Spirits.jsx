import React from 'react'
import Spirit from './Spirit'


import "./Spirits.css"


export default function Sprits() {


    const array = ["Rom", "Gin", "Tequila", "Vodka", "Whiskey"]
    array.sort((a,b) => a > b ? 1 : -1);

    return (

        <div className='spirits'>
            {array.map(toMap => {
                return <Spirit spirit={toMap} />
            })}
  
          
        </div>
    )
}