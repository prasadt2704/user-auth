const User = require('../models/userModel');
const { setUser } = require('../service/auth');

function renderLogin(req, res) {
  res.render("index");
}

async function handleLogin(req, res) {
  if (!req.body.username ||  !req.body.password) {
    return res.status(500).send("Error: Missing username or password");
  }
  try {
    const data = await User.findOne({
      username : req.body.username,
      password : req.body.password
    });
    if (!data) {
      return res.status(401).send("Error: Invalid username or password");
    }

    const token = setUser({
      username: req.body.username,
      password: req.body.password
    })
    res.cookie("uid", token);
    res.status(200).redirect('/dashboard');
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }

}

function renderRegister(req, res) {
  res.render("register");
}

async function handleRegister(req, res) {
  if (!req.body.username ||  !req.body.password) {
    return res.status(500).send("Error: Missing username or password");
  }

  try {
    await User.create({
      username : req.body.username,
      password : req.body.password
    });
    res.status(201).redirect('/');
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }

}

function renderDashboard(req, res) {
  return res.render("dashboard", { 
    username: req.user.username
  });
}

function handleLogout(req, res) {
  res.clearCookie("uid");
  res.redirect('/login');
}

module.exports = {
  renderLogin,
  renderDashboard,
  handleLogin,
  handleRegister,
  renderRegister,
  handleLogout
};
