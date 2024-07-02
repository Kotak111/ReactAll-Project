import { createStore } from "redux";
import { counterreducer } from "./reducer";
export const store = createStore(counterreducer)