const express = require("express");
const {
  renderLogin,
  renderDashboard,
  handleLogin,
  handleRegister,
  renderRegister,
  handleLogout
} = require("../controllers/index");
const { restrictToLoginUsers } = require("../middleware/userAuth");

const router = express.Router();

router.get("/", renderLogin);

router.route('/login').get(renderLogin).post(handleLogin);

router.route("/register").get(renderRegister).post(handleRegister);

router.get("/dashboard", restrictToLoginUsers, renderDashboard);

router.get("/logout", handleLogout);

module.exports = router;