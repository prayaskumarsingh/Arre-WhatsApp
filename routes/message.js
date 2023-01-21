let router = require("express").Router();
const messageController = require("../controllers/message");

router.post("/getMessages", messageController.getMessages);

router.post("/text", messageController.sendText);
// router.post("/image", messageController.sendImage);

module.exports = router;
