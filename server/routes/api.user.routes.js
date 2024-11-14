const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const router = require("express").Router();
const {
  loginController,
  refreshController,
  logoutController,
} = require("../controllers/AuthController");

const {
  createUserController,
  deleteRentaController,
  getAllUserController,
  updateUserController,
} = require("../controllers/UserController");

router
  .post("/", createUserController)
  .get("/", getAllUserController)
  .delete("/:id", deleteRentaController)
  .put("/:id", updateUserController);

module.exports = router;
