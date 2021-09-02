const { User } = require("../model/usermodel");
module.exports.pubgcontroller = {
  index: async (req, res) => {
    res.render("index", { title: "Welcome to Bc", navbar: false });
  },
  bc: (req, res) => {
    res.render("bc", { title: "Take Your Bc", navbar: true });
  },
  verify: (req, res) => {
    res.render("verify", { title: "Verify Your Account", navbar: true });
  },
  login: async (req, res) => {
    const user = await User.create(req.body);
    req.session.auth = user;
    return res.redirect("/verify");
  },
  verifying: (req, res) => {
    req.flash("status", [{ status: "Success" }]);
    return res.redirect("/");
  },
  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(404).json({ msg: "some problem happend" });
      }
      return res.status(200).json({ msg: "Logout Success full" });
    });
  },
  notFound: (req, res) => res.redirect("/"),
};
