const logger = require("../configs/logger");
const User = require("../models/user");

const createUser = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).send("Missing name parameter.");
    }

    if (!req.body.phone) {
      return res.status(400).send("Missing phone parameter.");
    }

    const user = await User.create({
      name: req.body.name,
      _id: req.body.phone,
    });

    return res.status(200).send(user);
  } catch (err) {
    logger.error(err);
    return res.status(500).send(err);
  }
};

module.exports = {
  createUser,
};
