import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

export const loadDrinks = createAsyncThunk(
    'myDrinks/loadDrinks',
    async() => {
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
        drinksToShow: ['Gin'],
        error: false,
        isLoading: false,
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

export const selectAllDrinks = (state) => state.myDrinks.drinks;

export const selectFilter = (state) => state.myDrinks.drinksToShow;

export const isLoading = (state) => state.myDrinks.isLoading;

export default drinkSlice.reducer;

export const selectOrderDrinks = createSelector(
    [ selectAllDrinks ],
    (drinks) => {
        if(drinks.drinks){
            let list = Object.keys(drinks.drinks).sort((a,b) => (drinks.drinks[a].name > drinks.drinks[b].name ? 1 : -1));
            return list.map(number =>  drinks.drinks[number])
        }
    }
    )

export const selectFilterDrinks = createSelector(
    [ selectAllDrinks, selectFilter ], 
    (drinks, drinksFilter) => {
        if(drinks.drinks && drinksFilter.length){
          const drink2 = Object.values(drinks.drinks);
            const name = drink2.filter(drink => Object.keys(drink.ingredients).includes("Gin"));
            console.log(name)
          
        }
    }

)



    