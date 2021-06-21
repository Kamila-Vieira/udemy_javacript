exports.middlewareGlobal = (req, res, next) => {
  console.log("Passei no Middleware global!");
  if (req.body.cliente) {
    console.log("Enviei formulário");
    console.log(`${req.body.cliente}, você enviou um formulário com sucesso!`);
  }
  next();
};

exports.middlewareSecundario = (req, res, next) => {
  console.log("Passei no Middleware secundario!");
  next();
};
