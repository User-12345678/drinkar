import { getDatabase, ref, set, push, child, get } from "firebase/database";
import React, { useState, useEffect } from 'react';
import { FaGlassMartiniAlt, FaGlassMartini } from 'react-icons/fa';
import { IconContext } from "react-icons";
import './DrinkRating.css'
const lodash = require('lodash');



const db = getDatabase();

export const DrinkRating = (props) => {
    const [rate, setRate] = useState("");


    const {name} = props;

    const getRating = async(rating) => {
        try {
            const value = await (await get(ref(db, 'ratings_backup/'+ rating)));
            let ratingsArray = value.val().rating;
            const sum = lodash.sum(ratingsArray);
            setRate(sum / (ratingsArray.length - 1));
        } catch(error) {
            console.log(error);
        }
    } 
    
    useEffect(() => {
        getRating(name);
    }, [])

    return(

        <div className="container">
        
            <FaGlassMartini className="full"/>
            <FaGlassMartini className="full"/>
            <FaGlassMartini className="full"/>
            <FaGlassMartini className="empty"/>
       
        </div>
    
       
    )

}