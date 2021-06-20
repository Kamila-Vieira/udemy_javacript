const e = require("express");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); // Permite que os dados do do corpo do post sejam vistos em json

app.get("/contato", (requisicao, resposta) => {
  resposta.send(`
    <h1>Obrigado por entrar em contato conosco!</h1>
    <form action="/" method="POST">
      <label for="nome">Nome</label>
      <input name="nome" id="nome" type="text" required />
      <br/>
      <br/>
      <label for="idade">Idade</label>
      <input name="idade" id="idade" type="number" required />
      <input name="submit" id="submit" type="submit" value="Enviar">
    </form>
  `);
});

app.get("/testes/:idUsuarios?/:outroparametro?", (requisicao, resposta) => {
  console.log(requisicao.params); // /:parametro? => /parametro (interrogação permite que seja opcional)
  console.log(requisicao.query); // ?chave1=valor1&chave2=valor2&chave3=valor3 { chave1: valor1, chave2: valor2 }
  // resposta.send(requisicao.params); se torna JSON
  resposta.send(requisicao.params.idUsuarios);
});

app.post("/", (requisicao, resposta) => {
  console.log("corpo do POST: ", requisicao.body); // retorna os dados da requisição, no caso os campos do formulário
  resposta.send(
    `Olá, ${requisicao.body.nome}. Recebi o formulário!
    <br> 
    <a href='/contato'>Contato<a href='/contato'>
    `
  );
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
