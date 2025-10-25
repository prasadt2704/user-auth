const { getUser } = require('../service/auth');

async function restrictToLoginUsers(req, res, next) {
  if (!req.cookies.uid) {
    return res.status(401).redirect('/login');
  }

  const user = getUser(req.cookies.uid);
  if (!user) {
    return res.status(401).redirect('/login');
  }

  req.user = user;
  next();
}


module.exports = {restrictToLoginUsers};