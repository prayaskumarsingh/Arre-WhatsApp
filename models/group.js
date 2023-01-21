const mongoose = require("mongoose");
const User = require("./user");
const GroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      message: "'name' is required",
    },
    members: {
      type: Array,
      ref: User,
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Group", GroupSchema);
