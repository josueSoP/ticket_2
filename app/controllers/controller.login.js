const Usuarios = require('../models/model.usuarios');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

//////////MODULOS PARA LOGIN ///////////
module.exports.chequearUsuario = async (usr)=>{
    let usrchk = usr
    try {
        let resultado =  await Usuarios.existenciaDeUsuario(usrchk)
        if (resultado) {
            let result =  await Usuarios.usuarioAutenticado(usrchk)
            return result
        }else {
            throw new Error ('Contraseña Incorrecta')
        }
    }catch (err){
        throw new Error ('No existe el usuario o la ontraseña es incorrecta')
    }
}

module.exports.datosUsuario = async (usr) => {
    let dataUser = usr
    try {
        let resultado =  await Usuarios.recuperarInfoUser(dataUser)
        if (resultado) {
            return resultado
        }else {
            throw new Error ('No hay datos de Usuario')
        }
    }catch (err){
        console.log(err)
        throw new Error (' no semuy bien que paso')
    }
}

module.exports.generaToken = async (data)=>{
    try {
        let resultado = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60), data}, secret)
        data.pass = undefined; //para que no se muestre la contraseña la hacer el SEND
        return resultado
    }catch (err){
        console.log(err)
        throw new Error (err)
    }
}