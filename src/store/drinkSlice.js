import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {

    drinks: [{}],
    error: false,
    isLoading: false,
}


export const drinkSlice = createSlice({
    name: 'myDrinks',
    initialState,
    reducers: {
        addDrink(state, action){
            state.drinks = action.payload;
        }
    }
})


export const {addDrink} = drinkSlice.actions;

export const selectAllDrinks = (state) => state.myDrinks.drinks;

export default drinkSlice.reducer;