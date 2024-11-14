const {
    createRentaController,
    deleteRentaController,
    getAllRentaController,
    updateRentaCardController,
} = require("../controllers/RentaController");

const varifyAccessToken = require("../middleware/varifyAccessToken")

const router = require('express').Router()

router
.get('/', getAllRentaController)
.post('/', varifyAccessToken, createRentaController)
.delete('/:id', varifyAccessToken, deleteRentaController)
.put('/:id', varifyAccessToken, updateRentaCardController)


module.exports = router;
