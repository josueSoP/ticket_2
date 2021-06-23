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
//este modulo solo es una prueba para checar mi tabla que este bien y que si logre guardar datos
module.exports.guardarTablas = async (data)=>{
    try {
        let resCono = await Conocimientos.guardar(id,data)
        // let resTecno = await Tecnologias.guardar(id,data)
        // let resDesem = await Desempeno.guardar(id,data)
        // let resBlandas = await Blandas.guardar(id,data)
        // let resEntorn = await Entornos.guardar(id,data)
        // let resExtra = await Extra.guardar(id,data)
        // let resultado = {resCono, resTecno, resDesem, resBlandas, resEntorn, resExtra}
        // return resultado
        // console.log(resCono);
        return resCono
    } catch (err) {
        console.log('Error controlador ' + err)
        throw new Error('Error en el controlador guardarTablas')
    }
}

////la idea es que este modulo pueda recibir el id de la tabla usuarios y los datos de 
//la tabla conocimientos (AUN NO ME SALE)
module.exports.guardarTablaConId = async (id,data)=>{
    try {
        let resCono = await Conocimientos.guardarConId(id,data)
        // let resTecno = await Tecnologias.guardar(id,data)
        // let resDesem = await Desempeno.guardar(id,data)
        // let resBlandas = await Blandas.guardar(id,data)
        // let resEntorn = await Entornos.guardar(id,data)
        // let resExtra = await Extra.guardar(id,data)
        // let resultado = {resCono, resTecno, resDesem, resBlandas, resEntorn, resExtra}
        // return resultado
        // console.log(resCono);
        return resCono
    } catch (err) {
        console.log('Error controlador ' + err)
        throw new Error('Error en el controlador guardarTablas')
    }
}
