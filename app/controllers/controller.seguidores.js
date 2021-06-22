// const path = require ('path');
// const fs = require ('fs');
const User = require ('../models/model.usuarios');
const Follow = require ('../models/model.follow');

async function prueba(req,res){
    res.status(200).send({message: 'hola desde el controlador follow'});
}

module.exports.saveFollow = async (req,res)=>{
    let follow = new Follow
    follow.seguidor=req.params.seguidor; //usuario que sigue = usuario identificado
    follow.followed= req.body.followed;

    follow.save((err,followGuardado) =>{
        if(err) return res.status(400).send({message:'Error al guardar el seguimiento'});
        
        if(!followGuardado){
            return res.status(400).send({message:'El seguimiento no se ha guardado'});

        }else{
            return res.status(200).send({follow: followGuardado});
        }

        
    });
}

module.exports = {prueba}
//guardar modificacion
module.exports.deleteFollow = async (data) => {
    try {
        await Usuarios.update({nombres: data.nombres, apellidos: data.apellidos, email: data.email, usuario: data.usuario, pass: data.pass,imagen: data.imagen}, {where: { id : data.id}})
        return true;
    }catch (err){
        throw new Error ('No se pudo actualizar el producto seleccionado')
    }
}

//guardar modificacion
module.exports.getFollowingUsers = async (data) => {
    try {
        let resultado = await Usuarios.buscarId(data)
        return resultado
    }catch (err) {
        throw new Error ('Ocurrio un problema en el controlador al BUSCAR usuario')
    }
}

//guardar modificacion
module.exports.getFollowedUsers = async (data) => {
    try {
        let resultado = await Usuarios.buscarId(data)
        return resultado
    }catch (err) {
        throw new Error ('Ocurrio un problema en el controlador al BUSCAR usuario')
    }
}

//guardar modificacion
module.exports.getMyFollows = async (data) => {
    try {
        let resultado = await Usuarios.buscarId(data)
        return resultado
    }catch (err) {
        throw new Error ('Ocurrio un problema en el controlador al BUSCAR usuario')
    }
}