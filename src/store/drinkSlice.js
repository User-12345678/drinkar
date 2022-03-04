import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import {firebaseConfig} from '../firebase';


export const loadDrinks = createAsyncThunk(
    'myDrinks/loadDrinks',
    async() => {  
           const data = await fetch(`${firebaseConfig.databaseURL}/drinks.json`,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }});
             return data.json();
    }
)


export const drinkSlice = createSlice({
    name: 'myDrinks',
    initialState: {
        drinks: [],
        drinksToShow: [],
        error: false,
        isLoading: false,
    },
    reducers : {
        addFilter(state, action) {
            state.drinksToShow.push(action.payload);
        },
        removeFilter(state, action){
            const index = state.drinksToShow.indexOf(action.payload);
            state.drinksToShow.splice(index, 1);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadDrinks.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadDrinks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.drinks = action.payload;
            })
            .addCase(loadDrinks.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
    }
})

export const {addFilter} = drinkSlice.actions;

export const {removeFilter} = drinkSlice.actions;

export const selectAllDrinks = (state) => state.myDrinks.drinks;

export const selectFilter = (state) => state.myDrinks.drinksToShow;

export const isLoading = (state) => state.myDrinks.isLoading;

export default drinkSlice.reducer;

export const selectFilterDrinks = createSelector(
    [ selectAllDrinks, selectFilter ], 
    (drinks, drinksFilter) => {
        if(drinks && drinksFilter.length){
          const drink2 = Object.values(drinks);
          
          let map = new Map()
          for(let value of drinksFilter){
              for(let dr of drink2){
                 for( let ing of Object.keys(dr.ingredients)){
                     if(ing.toLowerCase().includes(value.toLowerCase())){
                        map.set(dr.name, dr)
                        break;
                     }
                 }
              }
          }
          let array = []
          map.forEach(drink => array.push(drink))
          return array.sort((a,b) => (a.name > b.name ? 1 : -1));
        }
        if(drinks){
        let list = Object.keys(drinks).sort((a,b) => (drinks[a].name > drinks[b].name ? 1 : -1))
            return list.map(number =>  drinks[number])
        }
    }
)



    