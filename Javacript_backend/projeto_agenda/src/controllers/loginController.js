const Login = require("../models/LoginModel");

exports.index = (req, res) => {
  res.render("login");
};
exports.register = (req, res) => {
  const login = new Login(req.body);
  login.register();

  if (login.errors.length > 0) {
    req.flash("error", login.errors);
    req.session.save(function () {
      return res.redirect("/login");
    });
    return;
  }

  res.send(login.user);
};
exports.login = (req, res) => {
  res.render("login");
};
