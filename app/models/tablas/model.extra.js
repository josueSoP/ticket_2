const sequelize = require('../../../db/db')

module.exports = class Datos {
  //constructor
  constructor (datos) {
    this.datos = datos
  }

////////////// FUNCION PARA LISTAR CONOCIMIENTOS EXTRA ////////////////
  static async listar (){
    let resultado = await sequelize.query('SELECT * FROM extras')
    return resultado[0]
  }

}