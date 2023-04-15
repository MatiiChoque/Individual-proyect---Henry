const { Country, Activity } = require("../src/db");

const getDbByPk = async (id) => {
  try {
    const countryFinded = await Country.findByPk(id, {
      include: {
        model: Activity,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return countryFinded;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getDbByPk;
