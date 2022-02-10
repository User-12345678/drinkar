import React, {useState, useEffect} from 'react'
import "./Drinks.css"
import Drink from '../Drink/Drink'

const drinks = [
     {
        name: "Gin Gin Mule",
        img: require("../Drink/Gin-Gin-Mule-2-023.jpg"),
        ingredients: {
            Gin: "5cl",
            Lime: "2cl",
            "Ginger Bear": "10cl",
            Mynta: "10st"
        }
    },
    {
        name: "Gin Basil Smash",
        img: require("../Drink/Social-Modern-Classic-Gin-Basil-Smash-Cocktail-Recipe.jpg"),
        ingredients: {
            Gin: "5cl",
            Citron: "3cl",
            Sockerlag: "2cl"
        }
    },
    {
        name: "Elder Gin Cocktail",
        img: "https://www.thespruceeats.com/thmb/JO6CrWIKlinWjnXV2BTqU_RwX7M=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EyeCandyCocktail-760048-011-5a2a128753ef4d07b836c4f5ccc9a8ae.jpg",
        ingredients: {
            Gin: "6cl",
            Flädersaft: "2cl",
            Citron: "2cl",
            Ingefära: "1/2msk",
            Mynta: "10st",
            Bubbelvatten: "5cl"

        }
    },
    {    name: "French 75",
        img: require("../Drink/French-75-cocktails-with-lemons-and-Champagne-in-the-background-featured-1.jpg"),
        ingredients: {
            Gin: "3cl",
            Citron: "2cl",
            Sockerlag: "2cl",
            Champange: "5cl"

        }
    },    
]


export default function Drinks(){

    return (
        <div className='drinks'>
            
            {drinks.map(drink => {
                return <Drink drink={drink} />
            })}
            
       

             
        </div>
       
    )

}