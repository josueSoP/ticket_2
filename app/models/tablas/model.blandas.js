const sequelize = require('../../../db/db')

module.exports = class Datos {
  //constructor
  constructor (datos) {
    this.datos = datos
  }

////////////// FUNCION PARA LISTAR HABILIDADES BLANDAS ////////////////
  static async listar (){
    let resultado = await sequelize.query('SELECT * FROM blandas')
    return resultado[0]
  }


////////////// FUNCION PARA GUARDAR INFORMACION TABLA BLANDAS ///////////
  static async guardar(data){
    let usuarioNuevo = [ data.enfocado, data.trabajoEq, data.comprometido, data.comunicacion, data.aprendizaje, data.resProblem ]
    try {
      await sequelize.query(`INSERT INTO blandas (enfocado, trabajoEq, comprometido, comunicacion, aprendizaje,resProblem) VALUES (?,?,?,?,?,?)`,
      {replacements : usuarioNuevo, type: sequelize.QueryTypes.SELECT})
      return true
    }catch (err){
      console.log(err)
      throw new Error ('No pude guardar')
    }
  }
}