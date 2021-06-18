const InfoActual = require('../models/model.infoActual');

/////////MODULOS PARA REGISTRO DE USUARIO///////
module.exports.guardartablas = async (data)=>{
    try{
        //si ingreso todos los dato
        if(data != null){           
                await InfoActual.create(({nombres: data.nombres }))
                await InfoActual.create(({nombres: data.nombres }))
                data.pass = undefined; //para que no se muestre la contraseña la hacer el SEND
                return true;
        }else{
            throw new Error ('Envia todos los datos necesarios')
        }
    }catch (err){
        console.log(err)
        throw new Error ('No pude guardar')
    }
}