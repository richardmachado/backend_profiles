const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

const loginRouter = require("./auth/auth-router");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", loginRouter);

server.get("/", (req, res) => {
  res.send("Your server is up and running!!!");
});

module.exports = server;
