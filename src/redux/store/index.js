import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import jobsReducer from "../reducers/jobsReducer";
import companyJobsReducer from "../reducers/companyJobsReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
  companyJobs: companyJobsReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
