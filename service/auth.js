const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const secret = "Prasad";

const setUser = (user) => {
  return jwt.sign(user, secret, { expiresIn: "1h" });
};

const getUser = (id) => {
  try {
    const user = jwt.verify(id, secret);
    return user;
  } catch (err) {
    return null;
  }
};

module.exports = {
  setUser,
  getUser,
};
