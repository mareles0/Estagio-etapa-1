const express = require('express');

const rout = express.Router();

rout.get('/tasks', (req, res) => res.status(200).send('router esta funcionando'));

module.exports = rout;