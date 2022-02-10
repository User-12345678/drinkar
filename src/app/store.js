import { configureStore } from '@reduxjs/toolkit';
import drinkSliceReducer from '../store/drinkSlice';


export const store = configureStore({
  reducer: {

    drinkSlice: drinkSliceReducer
    
  },
});
