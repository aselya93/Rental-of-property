const FavoritesService = require("../services/Favorites.service");

exports.createFavoritesController = async (req, res) => {
  const { user_id, renta_id } = req.body;
  try {
    const favorites = await FavoritesService.addToFavorites({
      user_id,
      renta_id,
    });
    res.status(201).json({ message: "success", favorites });
  } catch (error) {
    res.status(500).json({ message: error.message, favorites: {} });
  }
};

exports.deleteFavoritesController = async (req, res) => {
  const { id } = req.params;
  try {
    const countDeleteFavoritesCards = await FavoritesService.deleteFromFavorites(
      id
    );
    if (countDeleteFavoritesCards > 0) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllFavoritesController = async (req, res) => {
  try {
    const favorites = await FavoritesService.getAllFavorites();
    res.status(200).json({ message: "success", favorites });
  } catch (error) {
    res.status(500).json({ message: error.message, favorites: [] });
  }
};


exports.getUserFavoritesController = async (req, res) => {
    try {
      const favorites = await FavoritesService.getUserFavorites();
      res.status(200).json({ message: "success", favorites });
    } catch (error) {
      res.status(500).json({ message: error.message, favorites: [] });
    }
  };