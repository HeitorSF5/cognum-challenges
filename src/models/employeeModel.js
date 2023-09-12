const connection = require('./connection');

// DESAFIO 2

const createEmployee = async (employee) => {
  const { name, role } = employee;
  try {
    await connection.execute(
      'INSERT INTO Employee (name, role) VALUES (?, ?)',
      [name, role]
    );
    return true;
  } catch(err) { return false }
};

const readEmployees = async () => {
  try {
    const [employees] = await connection.execute('SELECT * FROM Employee')
    return employees
  } catch(err) { return false }
};

module.exports = { createEmployee, readEmployees };