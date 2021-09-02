const auth_check = (req, res, next) => {
  res.locals.user = "";
  res.locals.status=req.flash()
  if (req.session && req.session.auth) {
    res.locals.user = req.session.auth;
  }
  next();
};
const verify_check = (req, res, next) => {
  if (req.session && !req.session.auth) {
    return res.redirect("back")
  }
  next();
};

module.exports = { auth_check,verify_check };
