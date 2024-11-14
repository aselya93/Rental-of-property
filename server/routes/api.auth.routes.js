const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const router = require("express").Router();
const {
  loginController,
  refreshController,
  logoutController,
} = require("../controllers/AuthController");

router
  .post("/login", loginController)
  .get("/refresh", verifyRefreshToken, refreshController)
  .delete("/logout", logoutController);

module.exports = router;
