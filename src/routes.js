const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);


// req.query.nameParam =(rota?id=10) acessa query params geralmente método get (para filtros)
// req.params.nameParam =(rota/:id) acesa params da rota (utilizado para update e delete)
// req.body = acessa corpo da requisição  (criação e edição)
routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('imagem'),SpotController.store);
routes.get('/spots', SpotController.index);

module.exports = routes;