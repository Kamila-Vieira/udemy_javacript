const express = require("express");
const route = express.Router(); // faz o roteamento entre páginas, vrifica a rota e chama um controlador
const homeController = require("./src/controllers/homeController");

//Rotas da home
route.get("/", homeController.paginaInicial);

module.exports = route;
