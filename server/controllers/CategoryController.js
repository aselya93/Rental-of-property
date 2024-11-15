const CategorysService = require('../services/Categorys.service')

exports.getAllCategoryController = async (req, res) => {
    try {
      const categorys = await CategorysService.getAllCategory();
      res.status(200).json({ message: "success", categorys });
    } catch (error) {
      res.status(500).json({ message: error.message, categorys: [] });
    }
  };