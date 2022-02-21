import React from 'react'
import "./Header.css"
import {NavLink} from 'react-router-dom';

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
                        <NavLink to="/syrups"> SOCKERLAG</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shots"> SHOTS</NavLink>
                    </li>
                </ul>
            </nav>       
      </div>
       
        
    )
        
    

}