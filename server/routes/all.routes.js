const router = require('express').Router();
const apiAuthRoutes = require('./api.auth.routes');

router.use('/auth', apiAuthRoutes)




module.exports = router