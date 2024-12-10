import { GET_RESULTS } from "../actions";

const initialState = { content: [] };

const getResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULTS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default getResultsReducer;
