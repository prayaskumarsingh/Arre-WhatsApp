let router = require("express").Router();
const groupController = require("../controllers/group");

router.post("/create", groupController.createGroup);

router.post("/addUser", groupController.addUser);
router.post("/removeUser", groupController.removeUser);

router.post("/getAllUsers", groupController.getAllUserMembers);

module.exports = router;
