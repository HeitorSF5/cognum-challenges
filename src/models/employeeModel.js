const connection = require('./connection');

// DESAFIO 2 - Employee CRUD

// Note: Normally I'd make a full MSC/MVC architecture for handling all HTTP requests with their respective layers, but for simplicity's sake everything will happen in the Model layer.

const createEmployee = async (req, res) => {
  try {
    const { name, role } = req.body;
    await connection.execute(
      'INSERT INTO Employee (name, role) VALUES (?, ?)',
      [name, role]
    );
    // return true;
    return res.status(201).json({message: 'New employee created successfully!'})
  } catch(err) { return res.status(400).json({message: 'Something went wrong!!!'}) }
};

const readEmployees = async (_req, res) => {
  try {
    const [employees] = await connection.execute('SELECT * FROM Employee')
    // return employees
    return res.status(200).json(employees)
  } catch(err) { return res.status(500).json({message: "Server error!"}) }
};

module.exports = { createEmployee, readEmployees };