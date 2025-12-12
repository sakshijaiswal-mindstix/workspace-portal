import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    count: 0
}

const countReducer =  createSlice({
    name: "count",
    initialState,
    reducers: {
        increment(state){
            state.count+=1
        },
        decrement(state){
            state.count-=1
        },
    }
})


export const { increment, decrement } = countReducer.actions;
export default countReducer.reducer;