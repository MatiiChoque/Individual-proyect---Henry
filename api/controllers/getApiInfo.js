const axios = require("axios");
const URL = "https://restcountries.com/v3/all";

const getApiInfo = async () => {
  const apiUrl = await axios.get(URL);
  const apiInfo = await apiUrl.data.map((countryData) => {
    return {
      id: countryData.cca3,
      name: countryData.name.common,
      flags: countryData.flags[1],
      continent: countryData.region,
      capital: countryData.capital
        ? countryData.capital[0]
        : "No tiene capital",
      subregion: countryData.subregion,
      area: countryData.area,
      population: countryData.population,
    };
  });
  return apiInfo;
};

module.exports = getApiInfo;
