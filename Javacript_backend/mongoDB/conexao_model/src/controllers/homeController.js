const HomeModel = require("../models/HomeModel");

// HomeModel.create({
//   titulo: "Título teste",
//   descricao: "Descrição teste",
// })
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));

exports.paginaInicial = (req, res, next) => {
  res.render("index");
  console.log("Passei no segundo middleware");
  next();
  //return;
};

exports.enviaFormulario = (req, res, next) => {
  const { titulo, descricao, cliente } = req.body;
  HomeModel.create({
    titulo,
    descricao,
    cliente,
  })
    .then((dados) => console.log(dados))
    .catch((e) => console.log(e));
  res.render("index");
  next();
};
