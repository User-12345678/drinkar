import React from 'react'


export default function Description(props) {

    const {description} = props;
    return (
        
            <ol>    
            {description.map(item => {
                return <li> {item} </li>
            })}
            </ol>
    )
}