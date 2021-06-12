// const path = require ('path');
// const fs = require ('fs');
// const User = require ('../models/model.usuarios');
// const Chat = require ('../models/model.chat');

async function pruebaC(req,res){
    res.status(200).send({message: 'hola desde el controlador chat'});
}

module.exports = {
    pruebaC
}