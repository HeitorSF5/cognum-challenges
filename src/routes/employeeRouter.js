const { Router } = require('express');
const { readEmployees, createEmployee } = require('../models/employeeModel');

const employeeRouter = Router();

employeeRouter
  .post('/employee', createEmployee)
  .get('/employee', readEmployees)

module.exports = employeeRouter;