exports.errorMessages = (req, res, next) => {
  console.log(req.flash("errors"));
  res.locals.errors = req.flash("errors");
  next();
};

exports.checkCSFRError = (err, req, res, next) => {
  if (err) {
    return res.render("404");
  }
  next();
};

exports.csfrMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
