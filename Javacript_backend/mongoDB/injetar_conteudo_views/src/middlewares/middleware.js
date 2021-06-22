exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelMiddleware = "Este é o valor da variável Middleware"; // Disponível em todos os locais
  next();
};
exports.middlewareGlobalSecundario = (req, res, next) => {
  res.locals.variavelMiddlewareSecundario =
    "Este é o valor da variável Middleware somente da home";
  next();
};
