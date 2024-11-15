const { Favorites } = require("../db/models");

class FavoritesService {
  static async addToFavorites(user_id, renta_id) {
    try {
      const addToFav = await Favorites.create(user_id, renta_id);
      return addToFav;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async deleteFromFavorites(renta_id) {
    try {
      const deleteFromFav = await Favorites.destroy({ where: { renta_id } });
      return deleteFromFav;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async getAllFavorites() {

    try {
      const getAll = await Favorites.findAll({
        order: [["updatedAt", "ASC"]],
      });
      return getAll;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async getUserFavorites(user_id) {
    // byUser ?
    try {
      const getOne = await Favorites.findAll({
        where: { user_id },
      });
      return getOne;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = FavoritesService;
