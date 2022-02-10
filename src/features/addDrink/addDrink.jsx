import DropZone from './dropZone';
import Popup from 'reactjs-popup';
import "./addDrink.css"



export default function AddDrink(){





    return (
        <Popup trigger={<button className='button'> Lägg till drink </button>} modal>

            <form className='addDrinkForm'>
                <input className='namn' placeholder='Namn på drink'></input>
                <div className='ingridientser'>
                    <input className='typ'  placeholder='Ingridientser'></input>
                    <input className='mängd'  placeholder='Mängd'></input>
                </div>
                <DropZone />
        
                <input type="button" value="Lägg Till Drink"/>
            </form>


        </Popup>
    )

}
