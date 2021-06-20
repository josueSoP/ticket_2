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

}