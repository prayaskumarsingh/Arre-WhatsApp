const mongoose = require("mongoose");
const MessageSchema = require("./message");

const Text = MessageSchema.discriminator(
  "Text",
  new mongoose.Schema({
    message: {
      type: String,
      required: true,
      message: "'message' is required",
    },
  })
);

module.exports = Text;
