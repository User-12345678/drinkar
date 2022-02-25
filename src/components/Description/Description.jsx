import React from 'react'


export default function Description(props) {

    const {description, syrup} = props;
    return (
        
            <ol className="description">    
            {description.map(item => {
                return  <li> {item} </li>
            })}
           <p>{syrup}</p>
            </ol>
    )
}