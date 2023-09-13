const { Router } = require('express');
const { readEmployees, createEmployee, updateEmployee, deleteEmployee } = require('../models/employeeModel');

const employeeRouter = Router();

employeeRouter
  .post('/employee', createEmployee)
  .get('/employee', readEmployees)
  .put('/employee/:id', updateEmployee)
  .delete('/employee/:id', deleteEmployee)

module.exports = employeeRouter;