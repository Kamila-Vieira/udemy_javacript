exports.paginaInicial = (req, res) => {
  res.render("./Home/index");
};

exports.enviaFormulario = (req, res) => {
  res.send(`Olá, ${req.body.nome}. Recebi seus dados!`);
};
