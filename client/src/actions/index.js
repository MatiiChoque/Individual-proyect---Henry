import axios from "axios";

export const getCountries = () => {
  return async (dispatch) => {
    try {
      var response = await axios.get("http://localhost:3001/countries");
      return dispatch({
        type: "GET_COUNTRIES",
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getNameCountries = (name) => {
  return async (dispatch) => {
    try {
      var response = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      return dispatch({
        type: "GET_NAME_COUNTRIES",
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getDetailCountry = (idCountry) => {
  return async (dispatch) => {
    try {
      var response = await axios.get(
        `http://localhost:3001/countries/${idCountry}`
      );
      return dispatch({
        type: "GET_DETAIL_COUNTRY",
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      var act = await axios.get("http://localhost:3001/activities");
      return dispatch({
        type: "GET_ACTIVITIES",
        payload: act.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const postActivity = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/activities",
        payload
      );
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterByActivity = (payload) => {
  return {
    type: "FILTER_BY_ACTIVITY",
    payload,
  };
};

export const filterCountriesByContinent = (payload) => {
  return {
    type: "FILTER_BY_CONTINENT",
    payload,
  };
};

export const countriesByAlphabeticOrder = (payload) => {
  return {
    type: "ALPHABETIC_ORDER",
    payload,
  };
};

export const countriesByPopulationOrder = (payload) => {
  return {
    type: "POPULATION_ORDER",
    payload,
  };
};

export const clearDetailCountry = () => {
  return {
    type: "CLEAR_DETAIL_COUNTRY",
  };
};
