import { legacy_createStore } from "redux";
import { rootReducer } from "./reducerQ";


export const store = legacy_createStore(rootReducer)
