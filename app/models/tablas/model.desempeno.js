const sequelize = require('../../../db/db')

module.exports = class Datos {
  //constructor
  constructor (datos) {
    this.datos = datos
  }

////////////// FUNCION PARA LISTAR DESEMPEÑOS ////////////////
  static async listar (){
    let resultado = await sequelize.query('SELECT * FROM desempenos')
    return resultado[0]
  }

////////////// FUNCION PARA GUARDAR INFORMACION TABLA DESEMENOS ///////////
  static async guardar(data){
    let usuarioNuevo = [ data.calidadCod, data.velEntrega, data.performanceCod ]
    try {
      await sequelize.query(`INSERT INTO desempenos (calidadCod, velEntrega, performanceCod) VALUES (?,?,?)`,
      {replacements : usuarioNuevo, type: sequelize.QueryTypes.SELECT})
      return true
    }catch (err){
      console.log(err)
      throw new Error ('No pude guardar')
    }
  }

}