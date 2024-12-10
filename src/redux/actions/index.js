export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const GET_RESULTS = "GET_RESULTS";
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavourites = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  };
};

export const getResultsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const results = await response.json();
        dispatch({
          type: GET_RESULTS,
          payload: results,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
