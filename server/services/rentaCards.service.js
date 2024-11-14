const { Op, where } = require("sequelize");
const { Renta } = require("../db/models");

class RentaService {
    static async getAllRentaCards() {
        try {
            const renta = await Renta.findAll({
                order: [["id", "ASC"]]
            })
            return renta
        } catch (error) {
            throw new Error(error.message)
        }
    }
    static async createRentaCard(data){
        try {
            const renta = await Renta.create(data);
            return renta
        } catch (error) {
            throw new Error(error.message) 
        }
    }
    static async deleteRentaCard(id,){
        try {
            const deleteRentaCard = await Renta.destroy({where: {id}})
            return deleteRentaCard;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    
}
