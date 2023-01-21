const mongoose = require("mongoose");
const User = require("../user");
const Group = require("../group");

const MessageSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
      message: "'from' is required",
      ref: User,
    },
    to: {
      type: String,
      required: true,
      message: "'to' is required",
      ref: Group,
    },
  },
  {
    discriminatorKey: "messageType",
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", MessageSchema);
