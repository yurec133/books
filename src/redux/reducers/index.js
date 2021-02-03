import { combineReducers } from "redux";
import booksReducer from "./booksReducer";

const rootReducers = combineReducers({
    items: booksReducer
});

export default rootReducers;
