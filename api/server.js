const express = require("express");
const morgan = require("morgan");

//const goatRouter = require('./goats/goatRouter');

const server = express();

server.use(express.json(), morgan());
//server.use('/goats', goatRouter);

server.get("/", async (req, res) => {
  res.status(200).json({ message: "Welcome yo" });
});

module.exports = server