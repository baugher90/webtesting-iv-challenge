const express = require('express');

const goatRouter = require('./goats/goatRouter');

const server = express();

server.use(express.json());
server.use('/goats', goatRouter);

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'Welcome to the farm' });
});