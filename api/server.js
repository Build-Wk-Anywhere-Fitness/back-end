const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router");
const classRouter = require("./classes/class-router");
const userRouter = require("./users/user-router");
const restricted = require("./middleware/restricted");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/classes", restricted, classRouter);
server.use("/api/users/", restricted, userRouter);

server.get("/", (req, res) => {
  res.json({ server: "up" });
});

module.exports = server;
