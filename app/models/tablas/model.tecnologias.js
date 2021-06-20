const sequelize = require('../../../db/db')

module.exports = class Datos {
  //constructor
  constructor (datos) {
    this.datos = datos
  }

////////////// FUNCION PARA LISTAR USUARIOSS ////////////////
  static async listar (){
    let resultado = await sequelize.query('SELECT * FROM tecnologias')
    return resultado[0]
  }

}
