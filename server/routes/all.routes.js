const router = require('express').Router();
const apiAuthRoutes = require('./api.auth.routes');
const apiUserRoutes = require('./api.user.routes');
const apiRentaRoutes = require("./api.renta.routes");


router.use('/auth', apiAuthRoutes)
router.use('/user', apiUserRoutes)
router.use("/renta", apiRentaRoutes);

// router.use('*', )

module.exports = router

