import { combineReducers, configureStore } from "@reduxjs/toolkit";

import favouritesReducer from "../reducers/favouritesReducer";
import mainSearchReducer from "../reducers/mainSearchReducer";
import userSearchReducer from "../reducers/userSearchReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  userSearchResults: userSearchReducer,
  mainSearchResults: mainSearchReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
