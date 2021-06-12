const express = require('express');
const app = express.Router();
const controllerChat = require('../controllers/controller.chat');
// const midd = require('../../middleware/midd.usuarios');


app.get('/pruebaC', controllerChat.pruebaC)

module.exports = app;