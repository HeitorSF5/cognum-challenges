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

const readEmployee

module.exports = { createEmployee }