const express =  require('express');
const cors = require('cors');
const rout = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(rout);


module.exports = app;