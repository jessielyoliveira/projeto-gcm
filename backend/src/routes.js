const express = require('express');
const routes = express.Router();
const ClientController = require('./controller/ClientController')


routes.post('/addclient', ClientController.create);
routes.get('/list', ClientController.list);
routes.delete('/delete', ClientController.delete);

module.exports = routes;
