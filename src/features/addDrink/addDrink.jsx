import React, { useState } from 'react';
import { createDrink } from './createDrink';
import Popup from 'reactjs-popup';
import "./addDrink.css"


export default function AddDrink(){
    const [name, setName] = useState("");
    const [ingredient, setIngredient] = useState([{}]);
    const [typ, setTyp] = useState("");
    const [mängd, setMängd] = useState("");
    const [image, setImage] = useState("");
    const [click, setClick] = useState("");

    function clearForm(){
        setTyp("")
        setMängd("")
    }

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onIngredientChange = (e) => {
        setTyp(
            e.target.value
         )
    }

    const onAmmountChange = (e) => {
        setMängd(
            e.target.value
         )
    }

    const onImageChange = (e) => {
        setImage(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if(click === "add"){
            setIngredient(state => [...state,
                {
                [typ]: mängd
            }]
            )
            clearForm()
        } else {
             await createDrink({name, ingredient, image})
            .then(response => {
                return (response)
            });
        }
     
    }



    return (
        <Popup trigger={<button className='button'> Lägg till drink </button>} modal>

            <form className='addDrinkForm' onSubmit={onSubmit}>
                <input value={name} onChange={(e) =>onNameChange(e)} className='namn' placeholder='Namn på drink'></input>
                <div id="ing" className='ingridientser' onSubmit={onSubmit}>
                    <input value={typ}  name="typ" onChange={onIngredientChange} className='typ'  placeholder='Ingridients'></input>
                    <input value={mängd}  name="mängd"  onChange={onAmmountChange} className='mängd'  placeholder='Mängd'></input>
                    <input className='ingButton' type="submit" value="Addera en till ingridients" onClick={() =>setClick("add")}/>
                </div>
                <input value={image} onChange={onImageChange} placeholder='Lägg till länk för bild'></input>
                <input type="submit" value="Lägg Till Drink" onClick={() =>setClick("submit")}/>
            </form>


        </Popup>
    )

}
