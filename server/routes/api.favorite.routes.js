const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const router = require("express").Router();

const {
  createFavoritesController,
  deleteFavoritesController,
  getAllFavoritesController,
  getUserFavoritesController,
} = require("../controllers/FavoritesController");

router
  // .get("/:id", getUserFavoritesController)
  .post("/", createFavoritesController)
  .get("/", getAllFavoritesController)
  .delete("/:id", deleteFavoritesController)


module.exports = router;
