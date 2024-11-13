const router = require('express').Router();
const removeHTTPHeader = require('../middleware/removeHeader');
const allRouter = require('./all.routes')
const apiRouter = require('./api.routes')

router.use('/', allRouter)
router.use('/api', apiRouter)

module.exports = router