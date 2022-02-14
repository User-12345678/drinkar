import React from 'react'
import "./Ingretients.css"

export default function Ingredients(props){

    const {ingredient} = props

    return (
        <div className='ingredient'>
            {
                Object.entries(ingredient).map(([key, value]) => {
                    return <p> {key  }: {value} </p> 
                 })
            }
        </div> 
    )
}