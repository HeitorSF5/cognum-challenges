const { Router } = require('express');
const getRandomUsers = require('../api-consumers/randomUserGenAPI');

const populateRouter = Router();

populateRouter
  .get('/populate', getRandomUsers )

module.exports = populateRouter;