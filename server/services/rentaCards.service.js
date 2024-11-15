const { Op, where } = require("sequelize");
const { Renta } = require("../db/models");

class RentaService {
  static async getAllRentaCards() {
    try {
      const renta = await Renta.findAll({
        order: [["id", "ASC"]],
      });
      return renta;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async createRentaCard({
    category_id,
    title,
    price,
    description,
    photo,
    location,
    points_latitude,
    points_longitude,
  }) {
    try {
      const renta = await Renta.create({
        category_id,
        title,
        price,
        description,
        photo,
        location,
        points_latitude,
        points_longitude,
      });
      return renta;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async deleteRentaCard(id) {
    try {
      const deleteRentaCard = await Renta.destroy({
        where: { id },
      });
      return deleteRentaCard;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async updateRenta(data, id) {
    try {
      const [countUpdated] = await Renta.update(data, { where: { id } });
      return countUpdated;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async findRentaByName(name) {
    try {
      const renta = await Renta.findOne({ where: { name } });
      return renta;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = RentaService;
