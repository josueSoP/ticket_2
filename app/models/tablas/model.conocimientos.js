const sequelize = require('../../../db/db')

module.exports = class Datos {
  //constructor
  constructor (datos) {
    this.datos = datos
  }

////////////// FUNCION PARA LISTAR CONOCIMIENTOS ////////////////
  static async listar (){
    let resultado = await sequelize.query('SELECT * FROM conocimientos')
    return resultado[0]
  }

  ////////////// FUNCION PARA GUARDAR INFORMACION TABLA CONOCIMIENTOS ///////////
  static async guardar(data){
    let usuarioNuevo = [ data.bd, data.apis, data.testing, data.seguridad, data.teoriaObj]
    try {
      await sequelize.query(`INSERT INTO conocimientos (bd, apis, testing, seguridad, teoriaObj) VALUES (?,?,?,?,?)`,
      {replacements : usuarioNuevo, type: sequelize.QueryTypes.SELECT})
      return true
    }catch (err){
      console.log(err)
      throw new Error ('No pude guardar')
    }
  }



}


//   static async existenciaUser (data){
//     let buscaUsuario = [ data.usuario ]
//     try {
//         let resultado = await sequelize.query(`SELECT * FROM usuarios WHERE usuario = ?`,
//         {replacements : buscaUsuario, type : sequelize.QueryTypes.SELECT})
//         if (resultado[0] === undefined) {
//             return false
//         } else {
//             return true
//         }
//     } catch (error) {
//         throw new Error ('Ocurrio un error')
//     }
//   }

// ////////////// FUNCION PARA MODIFICAR UN USUARIOS ///////////
//   static async buscarId (data){
//     let usuarioUpdate = [ data ]
//     try {
//         let resultado = await sequelize.query(`SELECT * FROM usuarios WHERE id_usuarios = ? `,
//         {replacements : usuarioUpdate, type : sequelize.QueryTypes.SELECT})
//         if (resultado === null){
//           return false
//         }else {
//           return resultado[0]
//         }
//     } catch (error) {
//         throw new Error ('Ocurrio un error en el modelo buscarId')
//     }
//   }

//   static async actualizarUser (id, data){
//     let usuarioUpdate = [ data.nombres, data.apellidos, data.email, data.usuario, data.pass,
//       data.imagen, data.ciudad, data.pais, data.edad, data.estudios,data.linkedin,data.hobies, data.cv, id ]
//     try {
//       let resultado = await sequelize.query(`UPDATE usuarios SET nombres=?,apellidos=?,email=?,usuario=?,
//       pass=?,imagen=?,ciudad=?,pais=?,edad=?,estudios=?,linkedin=?,hobies=?,cv=? WHERE id_usuarios= ? `,
//       {replacements : usuarioUpdate, type: sequelize.QueryTypes.SELECT})
//       return resultado[0]
//     }catch (err){
//       console.log(err)
//       throw new Error ('Error en el modelo actualizarUser')
//     }
//   }

