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

  ////////////// FUNCION PARA GUARDAR INFORMACION TABLA EXTRAS ///////////
  static async guardar(data){
    let usuarioNuevo = [ data.conExtra ]
    try {
      await sequelize.query(`INSERT INTO extras (conExtra) VALUES (?)`,
      {replacements : usuarioNuevo, type: sequelize.QueryTypes.SELECT})
      return true
    }catch (err){
      console.log(err)
      throw new Error ('No pude guardar')
    }
  }

}