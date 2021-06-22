exports.paginaInicial = (req, res, next) => {
  // res.locals.umaVariavelLocal = "Este é o valor da variável local";
  res.render("index", {
    titulo: "Este é o título <em style='color: red'>injetado</em> da página",
    numeros: [1, 2, 3, 4, 5, 6],
  });
  next();
};

exports.enviaFormulario = (req, res, next) => {
  res.render("index");
  next();
};
