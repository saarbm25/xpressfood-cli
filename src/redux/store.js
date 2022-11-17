import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {userReducer, searchReducer, categoryReducer } from "./reducers";


const rootReducer = combineReducers({ userReducer, searchReducer, categoryReducer });
export const Store = createStore(rootReducer, applyMiddleware(thunk));