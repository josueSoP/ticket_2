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

/////////MODULOS PARA REGISTRO DE USUARIO///////
module.exports.guardarUsuario = async (data)=>{
    try{
        //si ingreso todos los dato
        if(data.nombres && data.apellidos && data.usuario && data.email && data.pass && data.imagen){ 
            let resultado = await Usuarios.findOne({where:{usuario: data.usuario}})
            if (resultado != null){
                // return false; 
                throw new Error ('Error el usuario ya existe')
            }else {            
                await Usuarios.create(({
                    nombres: data.nombres,
                    apellidos: data.apellidos,
                    email: data.email,
                    usuario: data.usuario,
                    pass: data.pass,
                    imagen: data.imagen}))
                data.pass = undefined; //para que no se muestre la contraseña la hacer el SEND
                return true;
            }
        }else{
            throw new Error ('Envia todos los datos necesarios')
        }
    }catch (err){
        console.log(err)
        throw new Error ('No pude guardar')
    }
}

////// MODULOS PARA LISTAR USUARIOS REGISTRADOS //////////
module.exports.listarRegistros = async ()=>{
    try {
        let resultado = await Usuarios.listar()
        return resultado
        
    }catch (err){
        console.log('Error de modelos' + err)
        throw new Error ('Ocurrio un problema en el controlador listar usuarios')
    }
} 

// ////////////MODULOS PARA MODIFICAR USUARIO//////////////
//Seleccionar un solo registro por su ID para poderlo modificar
module.exports.buscarRegistro = async (data)=>{
    try {
        let resultado = await Usuarios.buscarId(data)
        return resultado
    }catch (err) {
        throw new Error ('Ocurrio un problema en el controlador al BUSCAR usuario')
    }
}

//guardar modificacion
module.exports.modificarUsuario = async (data) => {
    try {
        await Usuarios.update({nombres: data.nombres, apellidos: data.apellidos, email: data.email, usuario: data.usuario, pass: data.pass,imagen: data.imagen}, {where: { id : data.id}})
        return true;
    }catch (err){
        throw new Error ('No se pudo actualizar el producto seleccionado')
    }
}

 ///////////MODULO PARA ELIMINAR UN REGISTRO ////////////
module.exports.eliminarRegistro = async (data) => {
    try {
        await Usuarios.destroy({
            where: { id : data}
        })
        return true;
    }catch (err){
        throw new Error ('No se pudo eliminar el usuario seleccionado')
    }
};