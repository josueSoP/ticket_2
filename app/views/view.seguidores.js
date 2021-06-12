// const express = require('express');
// const app = express.Router();
const controllerSeguidores = require('../controllers/controller.seguidores');
const midd = require('../../middleware/midd.verificacion');

module.exports = async (app)=> {
    app.get('/pruebas', midd.verificacionUsuario, controllerSeguidores.prueba)
    app.get('/prueba', midd.verificacionUsuario, async (req, res)=> {
        res.json('ok')
    })
}
