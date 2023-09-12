const axios = require('axios');
const DEFAULT_ROLE = 'Developer'

// DESAFIO 3 - POPULATE
const getRandomUsers = async (_req, res) => {
  const response = await axios.get('https://randomuser.me/api/?results=10&inc=name&noinfo');
  const data = response.data;
  for (const user of data.results) {
    // console.log(user.name.first)
  }
}

module.exports = getRandomUsers;