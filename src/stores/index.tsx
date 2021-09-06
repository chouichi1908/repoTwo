import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import weatherReducer from "./weather";

const reducer = combineReducers({
  weather: weatherReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// const store = configureStore({ reducer });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
