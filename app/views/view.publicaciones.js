const express = require('express');
const app = express.Router();
const controllerPublica = require('../controllers/controller.publicaciones');
// const midd = require('../../middleware/midd.usuarios');


app.get('/pruebaP', controllerPublica.pruebaP)

module.exports = app;