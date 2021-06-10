const express = require('express');
const app = express.Router();
const controladorUsuarios = require('../controllers/controller.usuarios')


app.post('/registro', controladorUsuarios.guardarUsuario);
app.post('/login', controladorUsuarios.loginUsuario);

module.exports = app;