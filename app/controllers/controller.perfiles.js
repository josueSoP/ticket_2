const Perfiles = require('../models/model.perfiles');

/////////MODULOS PARA CREAR PERFIL DE USUARIO ///////
module.exports.guardarPerfil = async (data)=>{
    try{
        //si ingreso todos los dato
        if(data.imagen && data.ciudad && data.pais && data.edad && data.estudios && data.idiomas){ 
            await Perfiles.create(({
                imagen: data.imagen,
                ciudad: data.ciudad,
                pais: data.pais,
                edad: data.edad,
                estudios: data.estudios,
                idiomas: data.idiomas,
                linkedin: data.linkedin,
                hombies: data.hombies} ))
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
module.exports.buscarPerfil = async (data)=>{
    try {
        let resultado = await Perfiles.buscarId(data)
        return resultado
    }catch (err) {
        throw new Error ('Ocurrio un problema en el controlador al BUSCAR perfil')
    }
}

//guardar modificacion
module.exports.modificarPerfil = async (id, data) => {
    try {
        await Perfiles.update({
            imagen: data.imagen,
            ciudad: data.ciudad,
            pais: data.pais,
            edad: data.edad,
            estudios: data.estudios,
            idiomas: data.idiomas,
            linkedin: data.linkedin,
            hombies: data.hombies},
            {where: { id : id} })
        let resultado = await Perfiles.findOne({where: {id: id}})
        return resultado;
    }catch (err){
        throw new Error ('Controlador: Perfil no actualizado ')
    }
}

////// MODULOS PARA LISTAR USUARIOS PERFILES //////////
module.exports.listarPerfiles = async ()=>{
    try {
        let resultado = await Perfiles.listar()
        return resultado
        
    }catch (err){
        console.log('Error de modelos' + err)
        throw new Error ('Ocurrio un problema en el controlador listar usuarios')
    }
} 