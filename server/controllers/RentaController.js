const { json } = require("sequelize");
const RentaService = require("../services/rentaCards.service")

exports.createRentaController = async(req,res) => {
    const {category_id, title, price, description, photo, location, points_latitude, points_longitude} = req.body;
    try {
        const renta = await RentaService.createRentaCard({
            category_id, 
            title, 
            price, 
            description, 
            photo, 
            location, 
            points_latitude, 
            points_longitude,
    
        });
        res.status(201).json({ message: "success", renta });
    } catch (error) {
        res.status(500).json({ message: error.message, book: {} });
    }
}
exports.deleteRentaController = async (req, res) => {
    const { id } =req.params;
    try {
        const countDeleteRentaCards = await RentaService.deleteRentaCard(id)
        if(countDeleteRentaCards > 0) {
            res.status(200).json({ message: "success"})
        } else {
            res.status(400).json({ message: "Not found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
exports.getAllRentaController = async (req, res) => {
    try {
        const rentaCard = await RentaService.getAllRentaCards()
        res.status(200).json({message: "success",rentaCard})
    } catch (error) {
        res.status(500).json({ message: error.message, rentaCard: [] });
    }
}

exports.updateRentaCardController = async(req, res) => {
    const {category_id, title, price, description, photo, location, points_latitude, points_longitude} = req.body;
    const { id } = req.params;
    try {
        const countUpdate = await RentaService.updateRenta(req.body, id)
        res.status(200).json({message: "success", countUpdate})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}