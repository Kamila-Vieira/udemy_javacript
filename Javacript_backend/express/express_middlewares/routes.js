const express = require("express");
const route = express.Router(); // faz o roteamento entre páginas, vrifica a rota e chama um controlador
const homeController = require("./src/controllers/homeController");

function meuMiddleware(req, res, next) {}

//Rotas da home
// Middleware é o segundo parâmetro, a função com os parâmetros da requisição.
route.get("/", homeController.paginaInicial);

module.exports = route;
