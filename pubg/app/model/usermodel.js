const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  provider: {
    type: String,
    required: true,
  },
});
module.exports.User = new mongoose.model("user", userSchema);
