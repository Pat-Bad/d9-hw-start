import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import getResultsReducer from "../reducers/getResultsReducer";

const mainReducer = combineReducers({
  favourites: favouritesReducer,
  results: getResultsReducer,
});
const store = configureStore({ reducer: mainReducer });

export default store;
