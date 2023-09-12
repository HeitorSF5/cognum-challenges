const { Router } = require('express');

const helloRouter = Router();

// DESAFIO 1
helloRouter.get('/hello', (_req, res) => res.status(200).json({message: "Hello, Cognum!"}))

module.exports = helloRouter;