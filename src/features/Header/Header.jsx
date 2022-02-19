import React from 'react'
import "./Header.css"
import {BrowserRouter as Router,
Routes, Route, NavLink} from 'react-router-dom';
import Shots from "../Shots/Shots";
import Syrup from "../Syrup/Syrup";
import MainPage from "../MainPage/MainPage";

export default function Header() {



    return(          
        <div className="header">

            <h1>DAVIDs DRINKAR</h1>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/"> DRINKAR</NavLink>
                    </li>
                    <li>
                        <NavLink to="/syrup"> SOCKERLAG</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shots"> SHOTS</NavLink>
                    </li>
                </ul>
            </nav>       
      </div>
       
        
    )
        
    

}