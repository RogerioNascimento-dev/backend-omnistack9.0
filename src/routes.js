const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const BookingRejectionsController = require('./controllers/BookingRejectionsController');
const BookingAprovalsController = require('./controllers/BookingAprovalsController');

const routes = express.Router();
const upload = multer(uploadConfig);


// req.query.nameParam =(rota?id=10) acessa query params geralmente método get (para filtros)
// req.params.nameParam =(rota/:id) acesa params da rota (utilizado para update e delete)
// req.body = acessa corpo da requisição  (criação e edição)
routes.post('/sessions', SessionController.store);
routes.put('/sessions/', SessionController.update);
routes.get('/sessions', SessionController.index);
routes.post('/spots', upload.single('imagem'),SpotController.store);
routes.post('/spots/:spot_id/bookings',BookingController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/bookings/:booking_id/approvals', BookingAprovalsController.store);
routes.post('/bookings/:booking_id/rejections', BookingRejectionsController.store);

module.exports = routes;