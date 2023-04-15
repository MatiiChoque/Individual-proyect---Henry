import axios from "axios";

export const getCountries = () => {
  return async (dispatch) => {
    var response = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: response.data,
    });
  };
};
