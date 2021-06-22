exports.paginaInicial = (req, res, next) => {
  //req.session.usuario = { nome: "kamila", logado: true };
  //console.log(req.session.usuario);
  //console.log(req.flash("info"), req.flash("error"), req.flash("success"));
  // req.flash("info", "Olá mundo!");
  // req.flash("error", "Olá mundo! error");
  // req.flash("success", "Olá mundo! success");
  res.render("index");
  next();
};

exports.enviaFormulario = (req, res, next) => {
  res.render("index");
  next();
};
