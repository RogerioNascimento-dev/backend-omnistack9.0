const express = require('express');
const routes = express.Router();

// req.query.nameParam =(rota?id=10) acessa query params geralmente método get (para filtros)
// req.params.nameParam =(rota/:id) acesa params da rota (utilizado para update e delete)
// req.body = acessa corpo da requisição  (criação e edição)
routes.put('/users', (req,res) => {
  return res.json(req.body);
  });

  module.exports = routes;