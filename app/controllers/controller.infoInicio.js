const InfoActual = require('../models/model.infoActual');

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
                await InfoActual.create(({
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