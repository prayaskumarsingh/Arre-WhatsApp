const logger = require("../configs/logger");
const Message = require("../models/message/message");

const TextMessage = require("../models/message/text");
const ImageMessage = require("../models/message/image");

const getMessages = async (req, res, next) => {
  try {
    if (!req.body.group) {
      return res.status(400).send("Missing group parameter.");
    }

    if (!req.body.skip) {
      req.body.skip = 0;
    }

    const message = await Message.find(
      { to: req.body.group },
      {},
      { skip: req.body.skip, limit: 5 }
    ).sort("createdAt");

    return res.status(200).send(message);
  } catch (err) {
    logger.error(err);
    return res.status(500).send(err);
  }
};

const sendText = async (req, res, next) => {
  try {
    if (!req.body.user) {
      return res.status(400).send("Missing user parameter.");
    }

    if (!req.body.group) {
      return res.status(400).send("Missing group parameter.");
    }

    if (!req.body.message) {
      return res.status(400).send("Missing message parameter.");
    }

    const message = await TextMessage.create({
      from: req.body.user,
      to: req.body.group,
      message: req.body.message,
    });

    return res.status(200).send(message);
  } catch (err) {
    logger.error(err);
    return res.status(500).send(err);
  }
};

module.exports = {
  getMessages,
  sendText,
};
