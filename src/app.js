const express = require('express');
const cors = require('cors');
const helloRouter = require('./routes/helloRouter')
const employeeRouter = require('./routes/employeeRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(helloRouter);
app.use(employeeRouter);


module.exports = app;