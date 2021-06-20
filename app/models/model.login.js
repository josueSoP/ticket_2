const sequelize = require('../../db/db')

module.exports = class Datos {
  //constructor
  constructor (datos) {
    this.datos = datos
}

// ////////MODULOS PARA LOGIN//////////////////
// static async existenciaDeUsuario (usr){
//   let resultado = await Usuarios.findOne({where: {usuario:usr.usuario, pass: usr.pass}})
//   if (resultado === null){
//       return false
//   }else {
//       return true
//   }
//   }

// module.exports.usuarioAutenticado = async (usr)=>{
//   //chequear con la base de datos que exista el usuario
//   let resultado = await Usuarios.findOne({where: {usuario:usr.usuario, pass: usr.pass}})
//   if (resultado === null){
//       return false
//   }else {
//       return true
//   }
// }

// module.exports.recuperarInfoUser = async (usr) => {
//   let resultado = await Usuarios.findAll({where: {usuario:usr.usuario, pass: usr.pass}})
//   if (resultado === null){
//     return false
//   }else {
//     return resultado[0]
//   }
// }

}