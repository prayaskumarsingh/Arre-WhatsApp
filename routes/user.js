let router = require("express").Router();
const userController = require("../controllers/user.js");

router.post("/create", userController.createUser);

module.exports = router;
