const Conocimientos = require('../models/tablas/model.conocimientos');
const Tecnologias = require('../models/tablas/model.tecnologias');
const Desempeno = require('../models/tablas/model.desempeno');
const Blandas = require('../models/tablas/model.blandas');
const Entornos = require('../models/tablas/model.entornos');
const Extra = require('../models/tablas/model.extra');

//////////// MODULO PARA LISTAR TABLAS ////////////
module.exports.listarInfoTablas = async ()=>{
    try {
        let resCono = await Conocimientos.listar()
        let resTecno = await Tecnologias.listar()
        let resDesem = await Desempeno.listar()
        let resBlandas = await Blandas.listar()
        let resEntorn = await Entornos.listar()
        let resExtra = await Extra.listar()
        let resIdiomas = await Idiomas.listar()
        let resultado = {resCono, resTecno, resDesem, resBlandas, resEntorn, resExtra,resIdiomas}
        return resultado
        
    }catch (err){
        console.log('Error de modelos' + err)
        throw new Error ('Ocurrio un problema en el controlador listar usuarios')
    }
} 

/////////MODULOS PARA CREAR INFORMACION //////////////////////
module.exports.guardarTablas = async (data)=>{
    try {
        let resCono = await Conocimientos.guardar(data)
        let resTecno = await Tecnologias.guardar(data)
        let resDesem = await Desempeno.guardar(data)
        let resBlandas = await Blandas.guardar(data)
        let resEntorn = await Entornos.guardar(data)
        let resExtra = await Extra.guardar(data)
        let resultado = {resCono, resTecno, resDesem, resBlandas, resEntorn, resExtra}
        return resultado
    } catch (err) {
        console.log('Error controlador' + err)
        throw new Error('Error en el controlador guardarTablas')
    }
}

// // ////////////MODULOS PARA MODIFICAR USUARIO//////////////
// //Seleccionar un solo registro por su ID para poderlo modificar
// module.exports.buscarTablas = async (data)=>{
//     try {
//         let resultado = await Perfiles.buscarId(data)
//         return resultado
//     }catch (err) {
//         throw new Error ('Ocurrio un problema en el controlador al BUSCAR perfil')
//     }
// }

// //guardar modificacion
// module.exports.modificarTablas = async (id, data) => {
//     try {
//         // await Conocimientos.update({BD:data.BD, apis:data.apis, testing:data.testing, seguridad:data.seguridad, teoriaObj:data.teoriaObj },{where: { id : id} })
//         // await Tecnologias.update({nodeJs:data.nodeJs, frontend:data.frontend, swagger:data.swagger, JS:data.JS },{where: { id : id} })
//         // await Desempeno.update({calidadCod:data.calidadCod, velEntrega:data.velEntrega, performanceCod:data.performanceCod },{where: { id : id} })
//         // await Blandas.update({enfocado:data.enfocado, trabajoEq:data.trabajoEq, comprometido:data.comprometido, comunicacion:data.comunicacion, aprendizaje:data.aprendizaje, resProblem:data.resProblem },{where: { id : id} })
//         // await Entornos.update({github:data.github, trello:data.trello, slack:data.slack, agiles:data.agiles },{where: { id : id} })
//         await Extra.update({conExtra: data.conExtra },{where: { id : id} })
//         let resultado = await Perfiles.findOne({where: {id: id}})
//         return resultado;
        
//     }catch (err){
//         throw new Error ('Controlador: Perfil no actualizado ') 
//     }
// }

