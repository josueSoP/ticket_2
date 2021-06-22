const Conocimientos = require('../models/tablas/model.conocimientos');
const Tecnologias = require('../models/tablas/model.tecnologias');
const Desempeno = require('../models/tablas/model.desempeno');
const Blandas = require('../models/tablas/model.blandas');
const Entornos = require('../models/tablas/model.entornos');
const Extra = require('../models/tablas/model.extra');

/////////MODULOS PARA REGISTRO DE USUARIO///////
module.exports.guardarTablas = async (data)=>{
    try{
        //si ingreso datos los dato
        if(data != null){           
                await Conocimientos.create(({BD:data.BD, apis:data.apis, testing:data.testing, seguridad:data.seguridad, teoriaObj:data.teoriaObj }))
                await Tecnologias.create(({nodeJs:data.nodeJs, frontend:data.frontend, swagger:data.swagger, JS:data.JS }))
                await Desempeno.create(({calidadCod:data.calidadCod, velEntrega:data.velEntrega, performanceCod:data.performanceCod }))
                await Blandas.create(({enfocado:data.enfocado, trabajoEq:data.trabajoEq, comprometido:data.comprometido, comunicacion:data.comunicacion, aprendizaje:data.aprendizaje, resProblem:data.resProblem }))
                await Entornos.create(({github:data.github, trello:data.trello, slack:data.slack, agiles:data.agiles }))
                await Extra.create(({conExtra: data.conExtra }))
                return true;
        }else{
            throw new Error ('Envia todos los datos necesarios')
        }
    }catch (err){
        console.log(err)
        throw new Error ('No pude guardar')
    }
}