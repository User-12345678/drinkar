import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

export const loadShots = createAsyncThunk(
    'myShots/loadShots',
    async() => {
        const data = await fetch("shots.json",{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }});
             return data.json();
    }
)

export const shotSlice = createSlice({
    name: "myShots",
    initialState: {
        shots: [{}],
        hasError: false,
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadShots.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(loadShots.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.shots = action.payload;
        })
        .addCase(loadShots.rejected, (state) => {
            state.isLoading  =false;
            state.hasError = true;
        })
    }
})