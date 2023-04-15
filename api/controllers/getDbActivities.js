const { Activity } = require("../src/db");

const getDbActivities = async () => {
  try {
    const allActivities = await Activity.findAll();
    return allActivities;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getDbActivities;
