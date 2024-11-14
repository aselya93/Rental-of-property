const { verifyRefreshToken } = require("../middlewares/auth.middleware");
const router = require('express').Router()
const {
  loginController,
  refreshController,
  logoutController,
} = require("../controllers/AuthController");

router
  .post("/authorization", loginController)
  .get("/refresh", verifyRefreshToken, refreshController)
  .delete("/logout", logoutController);

module.exports = router;
