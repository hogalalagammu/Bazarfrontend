import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./componenets/redux/reducers/main";

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
