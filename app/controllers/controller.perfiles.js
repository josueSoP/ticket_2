const Perfiles = require('../models/model.perfiles');

/////////MODULOS PARA CREAR PERFIL DE USUARIO ///////
module.exports.guardarPerfil = async (data)=>{
    try{
        //si ingreso todos los dato
        if(data.imagen && data.nombres && data.apellidos && data.ciudad && data.pais && data.edad && data.estudios && data.idiomas){ 
            await Perfiles.create(({
                imagen: data.imagen,
                nombres: data.nombres,
                apellidos: data.apellidos,
                ciudad: data.ciudad,
                pais: data.pais,
                edad: data.edad,
                estudios: data.estudios,
                idiomas: data.idiomas,
                linkedin: data.linkedin,
                hombies: data.hombies}))
            return true;
        }else{
            throw new Error ('Envia todos los datos necesarios')
        }
    }catch (err){
        console.log(err)
        throw new Error ('No pude guardar')
    }
}

// ////////////MODULOS PARA MODIFICAR USUARIO//////////////
//Seleccionar un solo registro por su ID para poderlo modificar
module.exports.buscarRegistro = async (data)=>{
    try {
        let resultado = await Perfiles.buscarId(data)
        return resultado
    }catch (err) {
        throw new Error ('Ocurrio un problema en el controlador al BUSCAR usuario')
    }
}

//guardar modificacion
module.exports.modificarUsuario = async (data) => {
    try {
        await Perfiles.update({
            imagen: data.imagen,
            nombres: data.nombres,
            apellidos: data.apellidos,
            ciudad: data.ciudad,
            pais: data.pais,
            edad: data.edad,
            estudios: data.estudios,
            idiomas: data.idiomas,
            linkedin: data.linkedin,
            hombies: data.hombies}, {where: { id : data.id}})
        return true;
    }catch (err){
        throw new Error ('No se pudo actualizar el producto seleccionado')
    }
}