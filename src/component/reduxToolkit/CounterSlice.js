import { createSlice } from "@reduxjs/toolkit";
const num = {
    no1: 0,
    // no2:0
}
const counterSlice =createSlice({
    name : "counter",
    initialState:num,
    reducers:{
        inc(state){
            console.log(state.no1);
            state.no1++;
        }
    }
})
export const {inc} = counterSlice.actions;
export default counterSlice.reducer;