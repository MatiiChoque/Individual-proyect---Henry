const { Activity, Country } = require("../db");
const { Router } = require("express");
const router = Router();
const getDbActivities = require("../../controllers/getDbActivities");

router.post("/", async (req, res) => {
  const { name, dificulty, duration, season, countryId } = req.body;
  try {
    const newActivity = await Activity.create({
      name,
      dificulty,
      duration,
      season,
      countryId,
    });
    const countries = await Country.findAll({
      where: {
        id: countryId,
      },
    });

    newActivity.addCountries(countries);

    return res.status(200).send({ message: "Activity created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allActivities = await getDbActivities();
    res.status(200).json(allActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
