import React from 'react'
import "./Ingretients.css"
import Skeleton from 'react-loading-skeleton'

export default function Ingredients(props){

    const {ingredient} = props

    return (
        <div className='ingredient'>
            {
                Object.entries(ingredient).map(([key, value]) => {
                    return <p> {key || <Skeleton /> }: {value || <Skeleton />} </p> 
                 })
            }
        </div> 
    )
}