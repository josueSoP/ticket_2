const express = require('express');
const app = express.Router();
const controladorUsuarios = require('../controllers/controller.usuarios');
const midd = require('../../middleware/midd.usuarios');
const multipart= require('connect-multiparty');
const md_upload =multipart({uploadDir: '../../uploads/usuarios'});//guardar ficheros que suba multiparty

app.get('/', midd.verificacionUsuario, async (req, res)=> {
    res.json('ok')
})
app.post('/registro', controladorUsuarios.guardarUsuario);
app.post('/login', controladorUsuarios.loginUsuario);
app.get('/buscarUsuario/:id', controladorUsuarios.burcarUsuario);// lleva midd.verificacionUsuario
app.put('/editarUsuario/:id', controladorUsuarios.editarUsuario);// midd.verificacionUsuario
app.post('/subirImagen/:id',md_upload, controladorUsuarios.subirImagen);//  [midd.verificacionUsuario, md_upload]

module.exports = app;

