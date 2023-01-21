const logger = require("../configs/logger");

const Group = require("../models/group");

const createGroup = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).send("Missing name parameter.");
    }

    if (!req.body.user) {
      return res.status(400).send("Missing user parameter.");
    }

    const group = await Group.create({
      name: req.body.name,
      $push: { members: req.body.user },
    });

    return res.status(200).send(group);
  } catch (err) {
    logger.error(err);
    return res.status(500).send(err);
  }
};

const addUser = async (req, res, next) => {
  try {
    let group = await Group.updateOne(
      { _id: req.body.group },
      { $push: { members: req.body.user } }
    );

    return res.status(200);
  } catch (err) {
    logger.error(err);
    return res.status(500).send(err);
  }
};

const removeUser = async (req, res, next) => {
  try {
    let group = await Group.updateOne(
      { _id: req.body.group },
      { $pop: { members: req.body.user } }
    );

    return res.status(200);
  } catch (err) {
    logger.error(err);
    return res.status(500).send(err);
  }
};

const getAllUserMembers = async (req, res, next) => {
  try {
    let group = await Group.findOne({ _id: req.body.group });
    return res.status(200).send(group);
  } catch (err) {
    logger.error(err);
    return res.status(500).send(err);
  }
};

module.exports = {
  createGroup,
  addUser,
  removeUser,
  getAllUserMembers,
};
