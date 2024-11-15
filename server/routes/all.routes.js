const router = require("express").Router();
const apiAuthRoutes = require("./api.auth.routes");
const apiRentaRoutes = require("./api.renta.routes");

router.use("/auth", apiAuthRoutes);
router.use("/renta", apiRentaRoutes);

module.exports = router;
