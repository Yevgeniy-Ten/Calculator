import {createStore} from "redux";
import calculationReducer from "./calculationReducer";

export const store = createStore(calculationReducer)