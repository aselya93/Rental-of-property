const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const router = require("express").Router();

const {
  createFavoritesController,
  deleteFavoritesController,
  getAllFavoritesController,
  getUserFavoritesController,
} = require("../controllers/FavoritesController");

router
  .post("/", createFavoritesController)
  .get("/", getAllFavoritesController)
  .delete("/:id", deleteFavoritesController)
  .get("/:id", getUserFavoritesController);

module.exports = router;
