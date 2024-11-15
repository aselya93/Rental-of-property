const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const router = require("express").Router();

const {
  createUserController,
  deleteUserController,
  getAllUserController,
  updateUserController,
} = require("../controllers/UserController");

router
  .post("/", createUserController)
  .get("/", getAllUserController)
  .delete("/:id", deleteUserController)
  .put("/:id", updateUserController);

module.exports = router;
