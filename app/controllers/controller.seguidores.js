// const path = require ('path');
// const fs = require ('fs');
const User = require ('../models/model.usuarios');
const Follow = require ('../models/model.seguidores');

async function prueba(req,res){
    res.status(200).send({message: 'hola desde el controlador follow'});
}

async function saveFollow(req,res){
    let params = req.body;

    let follow = new Seguidores
    follow.user=req.user.sub;
    follow.followed= params.followed;

    follow.save((err,followStored) =>{
        if(err) return res.status(400).send({message:'Error al guardar el seguimiento'});
        
        if(!followeStorederr) return res.status(400).send({message:'El seguimiento no se ha guardado'});

    })

    res.status(200).send({message: 'hola desde el controlador follow'});
}

module.exports = {
    prueba,
    saveFollow
}