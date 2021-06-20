const sequelize = require('../../db/db')

module.exports = class Datos {
  //constructor
  constructor (datos) {
    this.datos = datos
  }

///////// FUNCIONES PARA CHECAR EXISTECIA DE USUARIO //////////////////
  static async existenciaUsuario(data) {
    let usuarioUpdate = [data.usuario, data.pass]
    try {
        let resultado = await sequelize.query(`SELECT * FROM usuarios WHERE usuario = ? AND pass = ?`,
            { replacements: usuarioUpdate, type: sequelize.QueryTypes.SELECT })
        if (resultado[0] === undefined) {
            return false
        }else {
            return true
        }
    } catch (error) {
        throw new Error('Ocurrio un error en el model existenciaDeUsuario')
    }
  }

  static async recuperarInfoUser(data) {
    let usuarioUpdate = [ data.usuario, data.pass ]

    try {
        let resultado = await sequelize.query(`SELECT * FROM usuarios WHERE usuario = ? AND pass = ?`,
            { replacements: usuarioUpdate, type: sequelize.QueryTypes.SELECT })
        if (resultado[0] === undefined) {
            return false
        } else {
            return resultado [0]
        }
    } catch (error) {
        throw new Error('Ocurrio un error model recuperarInfoUser')
    }
  }

}