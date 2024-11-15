const {Category} =require('../db/models')

class CategoryService {
    static async getAllCategory() {
        try {
          const response = await Category.findAll({
          });
          return response;
        } catch (error) {
          throw new Error(error.message);
        }
      }
}

module.exports = CategoryService