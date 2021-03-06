exports.checkCSFRError = (err, req, res, next) => {
  if (err && err.code === "EBADCSRFTOKEN") {
    return res.render("404");
  }
};

exports.csfrMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
