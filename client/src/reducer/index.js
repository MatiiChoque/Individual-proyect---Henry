const initialState = {
  countries: [],
  allCountries: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case "FILTER_BY_CONTINENT":
      const filterByContinent = state.allCountries;
      const filteredContinent =
        action.payload === "All"
          ? filterByContinent
          : filterByContinent.filter(
              (country) => country.continent === action.payload
            );
      return {
        ...state,
        countries: filteredContinent,
      };

    case "ALPHABETIC_ORDER":
      let sortedArr =
        action.payload === "asc"
          ? state.countries.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        countries: sortedArr,
      };

    default:
      return state;
  }
};
export default rootReducer;
