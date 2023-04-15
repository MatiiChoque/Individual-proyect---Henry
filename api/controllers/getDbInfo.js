const { Country, Activity } = require("../src/db");

const getDbInfo = async () => {
  try {
    const allCountries = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return allCountries;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getDbInfo;
