const { Router } = require('express');
const { readEmployees, createEmployee, updateEmployee } = require('../models/employeeModel');

const employeeRouter = Router();

employeeRouter
  .post('/employee', createEmployee)
  .get('/employee', readEmployees)
  .put('/employee', updateEmployee)

module.exports = employeeRouter;