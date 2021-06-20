const express = require("express");
const route = express.Router(); // faz o roteamento entre páginas, vrifica a rota e chama um controlador
const homeController = require("./controllers/homeController");
const contatoController = require("./controllers/contatoController");

//Rotas da home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.enviaFormulario);

//Rotas da contato
route.get("/contato", contatoController.paginaInicial);
route.post("/contato", contatoController.enviaFormulario);

module.exports = route;
