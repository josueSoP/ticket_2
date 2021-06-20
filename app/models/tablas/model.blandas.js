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

}