const { Country } = require("../src/db");
const getApiInfo = require("./getApiInfo");

const saveApiInfo = async () => {
  try {
    const allCountries = await getApiInfo();
    await Country.bulkCreate(allCountries);
  } catch (error) {
    return { error: error.message };
  }
};
module.exports = saveApiInfo;
