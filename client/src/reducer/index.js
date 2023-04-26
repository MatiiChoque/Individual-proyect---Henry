const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  detail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case "GET_NAME_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "CLEAR_DETAIL_COUNTRY":
      return {
        ...state,
        detail: [],
      };

    case "GET_DETAIL_COUNTRY":
      return {
        ...state,
        detail: action.payload,
      };

    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };

    case "POST_ACTIVITY":
      return {
        ...state,
      };
    case "FILTER_BY_ACTIVITY":
      const allActivities = state.allCountries;
      const filteredAct = allActivities.filter((country) => {
        return country.Activities.find((country) => {
          return country.name === action.payload;
        });
      });
      if (action.payload === "all") {
        return {
          ...state,
          countries: allActivities,
        };
      } else {
        return {
          ...state,
          countries: filteredAct,
        };
      }

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

    case "POPULATION_ORDER":
      let sortedPopulation =
        action.payload === "Lower_Population"
          ? state.countries.sort((a, b) => {
              if (a.population < b.population) {
                return -1;
              }
              if (a.population > b.population) {
                return 1;
              }
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.population < b.population) {
                return 1;
              }
              if (a.population > b.population) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        countries: sortedPopulation,
      };

    default:
      return state;
  }
};
export default rootReducer;
