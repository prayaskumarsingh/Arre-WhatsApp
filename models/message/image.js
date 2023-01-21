const mongoose = require("mongoose");
const MessageSchema = require("./message");

const Image = MessageSchema.discriminator(
  "Image",
  new mongoose.Schema({
    imgRef: {
      type: String,
      required: true,
      message: "'imgRef' is required",
    },
  })
);

module.exports = Image;
