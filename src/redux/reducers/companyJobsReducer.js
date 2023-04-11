import { ADD_COMPANY_JOBS } from "../action";

const initialState = {
  content: []
};

const companyJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY_JOBS:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export default companyJobsReducer;
