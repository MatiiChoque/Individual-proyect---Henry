const { Router } = require("express");
const getDbInfo = require("../../controllers/getDbInfo");
const getDbByPk = require("../../controllers/getDbByPk");
const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    //todo SOLICITO TODA LA INFORMACION

    let countriesTotal = await getDbInfo();

    //todo PASA ARRAY CON TODOS LOS PAISES BUSCADOS POR NOMBRE

    if (name) {
      let countriesName = countriesTotal.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );
      countriesName.length
        ? res.status(200).send(countriesName)
        : res.status(404).send("Country is not found.");
    } else {
      res.status(200).send(countriesTotal);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:idCountry", async (req, res) => {
  const { idCountry } = req.params;
  try {
    let countryFinded = await getDbByPk(idCountry.toUpperCase());
    countryFinded
      ? res.status(200).send(countryFinded)
      : res.status(404).send("Country is not found.");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
