const router = require('express').Router();
const apiAuthRoutes = require('./api.auth.routes');
const apiUserRoutes = require('./api.user.routes');
const apiRentaRoutes = require('./api.renta.routes');
// const apiCategoryRoutes = require('./api.category.routes')


router.use('/auth', apiAuthRoutes)
router.use('/user', apiUserRoutes)
router.use("/renta", apiRentaRoutes);
// router.use('/category', apiCategoryRoutes)

// router.use('*', )

module.exports = router

