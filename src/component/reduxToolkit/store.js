import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reduxToolkit/CounterSlice"
export const Store = configureStore({
    reducer:{
        counter : counterReducer,
        
    }
}) 
