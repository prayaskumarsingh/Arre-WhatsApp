const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      alias: "phone",
      required: true,
      message: "'phone' is required",
    },
    name: {
      type: String,
      required: true,
      message: "'name' is required",
    },
  },
  {
    minimize: false,
  }
);

module.exports = mongoose.model("User", UserSchema);
