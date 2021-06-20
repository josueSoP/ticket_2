const modelUsuarios = require('../models/model.usuarios');

//////////// MODULO PARA LISTAR USUARIOS ////////////
module.exports.listarRegistros = async ()=>{
    try {
        let resultado = await modelUsuarios.listar()
        return resultado
        
    }catch (err){
        console.log('Error de modelos' + err)
        throw new Error ('Ocurrio un problema en el controlador listar usuarios')
    }
} 

//////////// MODULOS PARA CREAR USUARIOS ////////////
module.exports.existenciaUsuario = async (data) => {
    try {
        let resultado = await modelUsuarios.existenciaUser(data)
        if (resultado) {
            return true 
        } else {
            return resultado
        }
    } catch (err) {
        console.log(err)
        throw new Error('no semuy bien que paso')
    }
}

module.exports.guardarUsuario = async (data)=>{
    try {
        let resultado = await modelUsuarios.guardarUser(data)
        return resultado
    } catch (err) {
        console.log('Error controlador' + err)
        throw new Error('Error en el controlador Crear usuario')
    }
}

//////////// MODULOS PARA MODIFICAR USUARIO //////////
module.exports.buscarUsuario = async (data)=>{
    try {
        let resultado = await modelUsuarios.buscarId(data)
        return resultado
    }catch (err) {
        throw new Error ('Ocurrio un problema en el controlador al BUSCAR usuario')
    }
}

module.exports.actualizarUsuario = async (id, data) => {
    try {
        let resultado = await modelUsuarios.actualizarUser(id,data)
        return resultado
    }catch (err){
        throw new Error ('No se pudo actualizar el producto seleccionado')
    }
}

// ///////// MODULO PARA ELIMINAR UN REGISTRO ////////
module.exports.eliminarUsuario = async (data) => {
    try {
        let resultado = await modelUsuarios.deleteUser(data)
        return resultado
    }catch (err){
        throw new Error ('Error en el controlador eliminarUsuario')
    }

};