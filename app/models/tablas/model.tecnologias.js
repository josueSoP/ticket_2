const sequelize = require('../../../db/db')

module.exports = class Datos {
  //constructor
  constructor (datos) {
    this.datos = datos
  }

////////////// FUNCION PARA LISTAR TECNOLOGIAS ////////////////
  static async listar (){
    let resultado = await sequelize.query('SELECT * FROM tecnologias')
    return resultado[0]
  }

  ////////////// FUNCION PARA GUARDAR INFORMACION TABLA TECNOLOGIAS ///////////
  static async guardar(data){
    let usuarioNuevo = [ data.nodeJs, data.frontend, data.swagger, data.js ]
    try {
      await sequelize.query(`INSERT INTO tecnologias (nodeJs, frontend, swagger, js) VALUES (?,?,?,?)`,
      {replacements : usuarioNuevo, type: sequelize.QueryTypes.SELECT})
      return true
    }catch (err){
      console.log(err)
      throw new Error ('No pude guardar')
    }
  }

}
