const express = require('express');
const routes = express.Router();
const ClientController = require('./controller/ClientController')
const OperationsController = require('./controller/OperationsController')


routes.post('/addclient', ClientController.create);
routes.get('/list', ClientController.list);
routes.delete('/delete', ClientController.delete);
routes.post('/credit', OperationsController.credit);

module.exports = routes;
