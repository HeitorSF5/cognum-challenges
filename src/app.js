const express = require('express');
const helloRouter = require('./routes/helloRouter')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(helloRouter)


module.exports = app;