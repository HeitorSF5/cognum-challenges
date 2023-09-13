const connection = require('./connection');

// DESAFIO 2 - Employee CRUD

// Obs: Normalmente eu crio e utilizo uma arquitetura MSC/MVC para respostas em HTTP com tudo em sua respectiva camada, mas por simplicidade eu optei por fazer tudo na camada de Model.

const createEmployee = async (req, res) => {
  try {
    const { name, role } = req.body;
    await connection.execute(
      'INSERT INTO Employee (name, role) VALUES (?, ?)',
      [name, role]
    );
    return res.status(201).json({message: 'New employee created successfully!'})
  } catch(err) {
    console.log(err)
    return res.status(400).json({message:"Could not create a new employee!"})
  }
};

const readEmployees = async (_req, res) => {
  try {
    const [employees] = await connection.execute('SELECT * FROM Employee')
    return res.status(200).json(employees)
  } catch(err) {
    console.log(err)
    return res.status(500).json({message:"Could not get employees!"})
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { name, role } = req.body;
    const { id } = req.params;
    await connection.execute(
      'UPDATE Employee SET name=?, role=? WHERE id=?',
      [name, role, id]
    )
    return res.status(200).json({message: 'Employee updated successfully!'})
  } catch(err) {
    console.log(err);
    return res.status(404).json({message: 'Could not update employee!'});
  }
}

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await connection.execute(
      'DELETE FROM Employee WHERE id=?',
      [id]
    );
    if (result.affectedRows === 0) return res.status(404).json({message:"Could not find employee!"})
    return res.status(200).json({message: "Employee deleted successfully!"});
  } catch(err) {
    console.log(err);
    return res.status(400).json({message: "Could not delete employee!"});
  }
}

const createManyEmployees = async (employeeList) => {
  try {
    const values = employeeList.map((employee) => [employee.name, employee.role]);
    // Formata para um Array de Arrays - Sintaxe de SQL
    const placeholders = employeeList.map(() => '(?, ?)').join(', ');
    // Converte o Array mapeado para string com virgulas intermitentes - Sintaxe de SQL

    const BULK_INSERT_QUERY = `INSERT INTO Employee (name, role) VALUES ${placeholders}`
    await connection.execute(BULK_INSERT_QUERY, [].concat(...values))
    return true;
  } catch(err) {
    console.log(err);
    return false ;
  }
};

module.exports = { createEmployee, readEmployees, updateEmployee, deleteEmployee, createManyEmployees };