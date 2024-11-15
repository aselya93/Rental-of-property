const router = require('express').Router();
const apiAuthRoutes = require('./api.auth.routes');
const apiUserRoutes = require('./api.user.routes');
const apiFavoriteRoutes = require('./api.favorite.routes');

router.use('/auth', apiAuthRoutes)
router.use('/user', apiUserRoutes)
router.use('/favorites', apiFavoriteRoutes)


module.exports = router