const sequelize = require('../../../db/db')

module.exports = class Datos {
  //constructor
  constructor (datos) {
    this.datos = datos
  }

////////////// FUNCION PARA LISTAR TECNOLOGIAS ////////////////
  static async listar (){
    let resultado = await sequelize.query('SELECT * FROM idiomas')
    return resultado[0]
  }

}
