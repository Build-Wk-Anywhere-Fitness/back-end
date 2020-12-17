const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router");
const classRouter = require("./classes/class-router");
const userRouter = require("./users/user-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/auth", authRouter);
server.use("/api/classes", classRouter);
server.use("/api/users/", userRouter);

server.get("/", (req, res) => {
  res.json({ server: "up" });
});

module.exports = server;
