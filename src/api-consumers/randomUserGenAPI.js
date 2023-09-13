const axios = require('axios');
const { createManyEmployees } = require('../models/employeeModel');
const DEFAULT_ROLE = 'Developer'

// DESAFIO 3 - POPULATE with External API

// Note: The challenge implied that I should reuse the CRUD functions previous made, but I'd rather make a new "CreateMany" to not establish 10 separate connection instances with the DB in quick succession, but rather just 1.

// Obs: O desafio deixa implicito o reuso das funções de CRUD criadas anteriormente, mas eu prefiro criar uma nova "CreateMany" para não estabelecer 10 instancias de conexões com o Banco de Dados, mas sim 1 unica conexão.

const getRandomUsers = async (_req, res) => {
  const response = await axios.get('https://randomuser.me/api/?results=10&inc=name&noinfo');
  const employeeList = response.data.results.map(({name}) => {
    return { name: name.first + " " + name.last, role: DEFAULT_ROLE }
  });
  try {
    const createSuccess = await createManyEmployees(employeeList);
    if (createSuccess) return res.status(201).json(employeeList)
    else return res.status(400).json({message: "Query could not be executed!"})
  } catch(err) { return res.status(400).json(err)}
};

module.exports = getRandomUsers;