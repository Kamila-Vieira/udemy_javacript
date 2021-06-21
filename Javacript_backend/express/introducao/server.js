const express = require("express");
const app = express();

app.get("/", (requisicao, resposta) => {
  resposta.send(
    "Helo world <br> <a href='/contato'>Contato<a href='/contato'>"
  );
});

app.get("/contato", (requisicao, resposta) => {
  resposta.send(`
    <h1>Obrigado por entrar em contato conosco!</h1>
    <form action="/" method="POST">
      <label for="name">Nome</label>
      <input name="name" id="name" type="text">
      <input name="submit" id="submit" type="submit" value="Enviar">
    </form>
  `);
});

app.post("/", (requisicao, resposta) => {
  resposta.send("Recebi o formulário!");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
