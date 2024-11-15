const router = require('express').Router();
const apiAuthRoutes = require('./api.auth.routes');
const apiUserRoutes = require('./api.user.routes');

router.use('/auth', apiAuthRoutes)
router.use('/user', apiUserRoutes)

// router.use('*', )

module.exports = router