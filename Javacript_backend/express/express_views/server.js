const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("views", path.resolve(__dirname, "src", "views")); // Pode-se usar o caminho relativo './src/views'
app.set("view engine", "ejs"); // permite a utilização de lógica no HTML

app.use(routes);

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
