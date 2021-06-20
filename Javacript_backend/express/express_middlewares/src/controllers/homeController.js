exports.paginaInicial = (req, res, next) => {
  res.render("index");
  console.log("Passei no segundo middleware");
  next();
  //return;
};

exports.enviaFormulario = (req, res, next) => {
  res.render("index");
  next();
};
