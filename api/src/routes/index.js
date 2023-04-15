const { Router } = require("express");
const routerActivity = require("./routerActivity");
const routerCountry = require("./routerCountry");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", routerCountry);

router.use("/activities", routerActivity);

module.exports = router;
