exports.paginaInicial = (req, res) => {
  res.render("./Contato/index");
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
