exports.paginaInicial = (req, res) => {
  res.send(`
    <a href='/contato'>Entrar em contato</a>
    <br/>
    <br/> 
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
};

exports.enviaFormulario = (req, res) => {
  res.send(`Olá, ${req.body.nome}. Recebi seus dados!`);
};
