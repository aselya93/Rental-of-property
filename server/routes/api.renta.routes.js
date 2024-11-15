const {
    createRentaController,
    deleteRentaController,
    getAllRentaController,
    updateRentaCardController,
} = require("../controllers/RentaController");

const verifyAccessToken = require("../middleware/verifyAccessToken")

const router = require('express').Router()

router
.get('/', getAllRentaController)
.post('/', verifyAccessToken, createRentaController)
.delete('/:id', verifyAccessToken, deleteRentaController)
.put('/:id', verifyAccessToken, updateRentaCardController)


module.exports = router;
