import { configureStore } from '@reduxjs/toolkit';
import myDrinksReducer from '../store/drinkSlice';


export const store = configureStore({
  reducer: {

    myDrinks: myDrinksReducer
    
  },
});
