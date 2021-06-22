const express = require("express");
const route = express.Router(); // faz o roteamento entre páginas, vrifica a rota e chama um controlador
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

//Rotas da home
route.get("/", homeController.index);

//Rotas de login
route.get("/login", loginController.index);
route.post("/login/register", loginController.register);

module.exports = route;
