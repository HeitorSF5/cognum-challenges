const express = require('express');
const cors = require('cors');
const helloRouter = require('./routes/helloRouter')
const employeeRouter = require('./routes/employeeRouter');
const populateRouter = require('./routes/populateRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(helloRouter);
app.use(employeeRouter);
app.use(populateRouter);


module.exports = app;