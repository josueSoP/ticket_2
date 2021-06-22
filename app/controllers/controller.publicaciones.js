// const path = require ('path');
// const fs = require ('fs');
// const User = require ('../models/model.usuarios');
// const Publicacion = require ('../models/model.publicaciones.js');

async function pruebaP(req,res){
    res.status(200).send({message: 'hola desde el controlador publicaciones'});
}

module.exports = {
    pruebaP
}