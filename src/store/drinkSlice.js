import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadDrinks = createAsyncThunk(
    'myDrinks/loadDrinks',
    async() => {
        console.log("HEK")
        const data = await fetch("data.json",{
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
        drinks: [{}],
        error: false,
        isLoading: false,
    },
    reducers: {
        addDrink(state, action){
            state.drinks = action.payload;
        }
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


export const {addDrink} = drinkSlice.actions;

export const selectAllDrinks = (state) => state.myDrinks.drinks;

export const isLoading = (state) => state.myDrinks.isLoading;

export default drinkSlice.reducer;