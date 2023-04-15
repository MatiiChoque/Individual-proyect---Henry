const axios = require("axios");
const URL = "https://restcountries.com/v3/all";

const getApiInfo = async () => {
  const apiUrl = await axios.get(URL);
  const apiInfo = await apiUrl.data.map((countryData) => {
    return {
      id: countryData.cca3,
      name: countryData.name.common,
      flags: countryData.flags.map((elem) => elem),
      continent: countryData.continents,
      capital: countryData.capital ? countryData.capital : "No tiene capital",
      subregion: countryData.subregion,
      area: countryData.area,
      population: countryData.population,
    };
  });
  return apiInfo;
};

module.exports = getApiInfo;
