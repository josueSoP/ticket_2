const sequelize = require('../../../db/db')

module.exports = class Datos {
  //constructor
  constructor (datos) {
    this.datos = datos
  }

////////////// FUNCION PARA LISTAR ENTORNOS PROFESIONALES ////////////////
  static async listar (){
    let resultado = await sequelize.query('SELECT * FROM entornos')
    return resultado[0]
  }

}