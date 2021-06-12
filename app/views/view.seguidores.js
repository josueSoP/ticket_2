const express = require('express');
const app = express.Router();
const controllerSeguidores = require('../controllers/controller.seguidores');
// const midd = require('../../middleware/midd.usuarios');


app.get('/pruebas', controllerSeguidores.prueba)

module.exports = app;