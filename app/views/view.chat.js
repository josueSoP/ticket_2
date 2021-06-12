const express = require('express');
const app = express.Router();
const controllerChat = require('../controllers/controller.chat');
// const midd = require('../../middleware/midd.usuarios');


module.exports = async (app)=> {
    app.get('/pruebaC', controllerSeguidores.pruebaC)
    app.get('/pruebaC', midd.verificacionUsuario, async (req, res)=> {
        res.json('ok')
    })
}