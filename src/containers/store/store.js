import {createStore} from "redux";
import countReducer from "./countReducer";

const store = createStore(countReducer)
export default store