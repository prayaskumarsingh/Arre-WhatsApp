const config = require("./configs/config");
const express = require("express");
const logger = require("./configs/logger");

const mongoSanitize = require("express-mongo-sanitize");
require("./configs/mongoConfig").connect();

const groupRouter = require("./routes/group");
const messageRouter = require("./routes/message");
const userRouter = require("./routes/user");

const app = express();
app.use(express.json());
app.use(
  mongoSanitize({
    allowDots: true,
  })
);

app.use("/api/group", groupRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);

console.log("Current config : ", process.env.NODE_ENV);
app.listen(process.env.PORT, () => {
  logger.info(
    `Backend application running at http://localhost:${process.env.PORT}`
  );
});
