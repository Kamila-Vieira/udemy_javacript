const express = require("express");
const route = express.Router(); // faz o roteamento entre páginas, vrifica a rota e chama um controlador
const homeController = require("./src/controllers/homeController");

function meuMiddleware(req, res, next) {
  req.session = { nome: "Kamila", sobrenome: "Almeida" };
  console.log("Passei no primeiro Middleware");
  next();
  //return;
}

// Middlewares: são os parâmetros de funções com os parâmetros da requisição, a partir do segundo parâmetro.
//next() Chama a próxima função da requisição, o return; faz parar na atual função, o next é obrigatório caso haja mais de uma função.
//Os Middlewares compartilham informações entre si, exemplo no req.session

//Rotas da home
route.get(
  "/",
  meuMiddleware,
  homeController.paginaInicial,
  function terceiraFuncao(req, res, next) {
    console.log("Terminei");
    console.log(req.session);
  }
);
route.post("/", homeController.enviaFormulario);

module.exports = route;
