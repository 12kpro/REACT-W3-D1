const BASE_URL = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const ADD_JOBS = "ADD_JOBS";

export const addToFavouritesAction = (company) => ({ type: ADD_TO_FAVOURITES, payload: company });
export const removeFromFavouritesAction = (company) => ({ type: REMOVE_FROM_FAVOURITES, payload: company });

export const addJobsAction = (query, limit) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}${query}&limit=${limit}`);
      if (resp.ok) {
        let fetchedJobs = await resp.json();
        dispatch({ type: ADD_JOBS, payload: fetchedJobs.data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
};