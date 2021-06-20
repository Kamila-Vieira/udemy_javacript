exports.paginaInicial = (req, res) => {
  res.send(`
    <h1>Obrigado por entrar em contato conosco!</h1>
    <a href='/'>Voltar para a Home</a>
    <form action="/" method="POST">
      <label for="nome">Nome</label>
      <input name="nome" id="nome" type="text" required />
      <br/>
      <br/>
      <label for="email">E-mail</label>
      <input name="email" id="email" type="email" required />
      <br/>
      <br/>
      <label for="mensagem">Mensagem</label>
      <textarea name="mensagem" id="mensagem" required></textarea>
      <input name="submit" id="submit" type="submit" value="Enviar">
    </form>
  `);
};

exports.enviaFormulario = (req, res) => {
  res.send(
    `Mensagem: ${req.body.mensagem}
    <br>
    Enviada com sucesso!
    <br>
    <a href='/'>Voltar para a Home</a>
    `
  );
};
