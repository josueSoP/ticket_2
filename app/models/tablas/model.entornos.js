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

////////////// FUNCION PARA GUARDAR INFORMACION TABLA ENTORNOS ///////////
  static async guardar(data){
    let usuarioNuevo = [ data.github, data.trello, data.slack, data.agiles ]
    try {
      await sequelize.query(`INSERT INTO entornos (github, trello, slack, agiles) VALUES (?,?,?,?)`,
      {replacements : usuarioNuevo, type: sequelize.QueryTypes.SELECT})
      return true
    }catch (err){
      console.log(err)
      throw new Error ('No pude guardar')
    }
  }

}