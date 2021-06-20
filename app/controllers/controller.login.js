const modelLogin = require('../models/model.login')
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

//////////MODULOS PARA LOGIN ///////////
module.exports.chequearUsuario = async (user)=>{
    try {
        let resultado =  await modelLogin.existenciaUsuario(user)
        if (resultado) {
            return resultado
        }else {
            return false
        }
    }catch (err){
        throw new Error ('Catch en el controlador chequearUsuario')
    }
}

module.exports.datosUsuario = async (user) => {
    try {
        let resultado =  await modelLogin.recuperarInfoUser(user)
        if (resultado) {
            return resultado
        }else {
            throw new Error ('No hay datos de Usuario')
        }
    }catch (err){
        console.log(err)
        throw new Error ('Catch controlador datosUsuario')
    }
}

module.exports.generaToken = async (data) => {
    try {
        let resultado = jwt.sign( {data}, secret )
        // data.pass = undefined; //para que no se muestre la contraseña la hacer el SEND
        return resultado
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}