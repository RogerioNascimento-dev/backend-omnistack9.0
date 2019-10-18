const express = require('express');
const routes = express.Router();
const SessionController = require('./controllers/SessionController');

// req.query.nameParam =(rota?id=10) acessa query params geralmente método get (para filtros)
// req.params.nameParam =(rota/:id) acesa params da rota (utilizado para update e delete)
// req.body = acessa corpo da requisição  (criação e edição)
routes.post('/sessions', SessionController.store);

module.exports = routes;