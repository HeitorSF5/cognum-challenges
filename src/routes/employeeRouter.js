const { Router } = require('express');
const { readEmployees, createEmployee, updateEmployee, deleteEmployee } = require('../models/employeeModel');

const employeeRouter = Router();

employeeRouter
  .post('/employee', createEmployee)
  .get('/employee', readEmployees)
  .put('/employee', updateEmployee)
  .delete('/employee', deleteEmployee)

module.exports = employeeRouter;