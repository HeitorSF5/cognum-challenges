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
    return res.status(201).json({message: 'New employee created successfully!'})
  } catch(err) { return res.status(400).json({message: 'Something went wrong!!!'}) }
};

const readEmployees = async (_req, res) => {
  try {
    const [employees] = await connection.execute('SELECT * FROM Employee')
    return res.status(200).json(employees)
  } catch(err) { return res.status(500).json({message: "Server error!"}) }
};

const updateEmployee = async (req, res) => {
  try {
    const { name, role, id } = req.body;
    await connection.execute(
      'UPDATE Employee SET name=?, role=? WHERE id=?',
      [name, role, id]
    )
    return res.status(200).json({message: 'Employee updated successfully!'})
  } catch(err) { return res.status(404).json({message: 'Employee not found!'}) }
}

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.body;
    await connection.execute(
      'DELETE FROM Employee WHERE id=?',
      [id]
    );
    return res.status(200).json({message: "Employee deleted successfully!"});
  } catch(err) { return res.status(404).json({message: "Could not find Employee to delete!"}) }
}
// NOTE: It will return a successful message when the id does not match any entry in the table!

module.exports = { createEmployee, readEmployees, updateEmployee, deleteEmployee };