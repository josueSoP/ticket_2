const sequelize = require('../../db/db')

module.exports = class Datos {
  //constructor
  constructor (datos) {
    this.datos = datos
}

////////////// FUNCION PARA LISTAR USUARIOSS ////////////////
  static async listar (){
    let resultado = await sequelize.query('SELECT * FROM usuarios')
    return resultado[0]
  }

////////////// FUNCION PARA REGISTRAR UN USUARIO ///////////
  static async guardarUser (data){
    let usuarioNuevo = [ data.nombres, data.apellidos, data.usuario, data.email, data.pass,
      data.imagen, data.ciudad, data.pais, data.edad, data.estudios,data.linkedin,data.hobies, data.cv]
    try {
      let resultado = await sequelize.query(`INSERT INTO usuarios(
        nombres,apellidos,usuario,email,pass,imagen,ciudad,pais,edad,estudios,linkedin,hobies,cv) 
        VALUES (?,?,?,?,?, ?,?,?,?,?,?,?,?)`,
      {replacements : usuarioNuevo, type: sequelize.QueryTypes.SELECT})
      return true
    }catch (err){
      console.log(err)
      throw new Error ('No pude guardar')
    }
  }

  static async existenciaUser (data){
    let buscaUsuario = [ data.usuario ]
    try {
        let resultado = await sequelize.query(`SELECT * FROM usuarios WHERE usuario = ?`,
        {replacements : buscaUsuario, type : sequelize.QueryTypes.SELECT})
        if (resultado[0] === undefined) {
            return false
        } else {
            return true
        }
    } catch (error) {
        throw new Error ('Ocurrio un error')
    }
  }

////////////// FUNCION PARA MODIFICAR UN USUARIOS ///////////
  static async buscarId (data){
    let usuarioUpdate = [ data ]
    try {
        let resultado = await sequelize.query(`SELECT * FROM usuarios WHERE id_usuarios = ? `,
        {replacements : usuarioUpdate, type : sequelize.QueryTypes.SELECT})
        if (resultado === null){
          return false
        }else {
          return resultado[0]
        }
    } catch (error) {
        throw new Error ('Ocurrio un error en el modelo buscarId')
    }
  }

  static async actualizarUser (id, data){
    let usuarioUpdate = [ data.nombres, data.apellidos, data.email, data.usuario, data.pass,
      data.imagen, data.ciudad, data.pais, data.edad, data.estudios,data.linkedin,data.hobies, data.cv, id ]
    try {
      let resultado = await sequelize.query(`UPDATE usuarios SET nombres=?,apellidos=?,email=?,usuario=?,
      pass=?,imagen=?,ciudad=?,pais=?,edad=?,estudios=?,linkedin=?,hobies=?,cv=? WHERE id_usuarios= ? `,
      {replacements : usuarioUpdate, type: sequelize.QueryTypes.SELECT})
      return resultado[0]
    }catch (err){
      console.log(err)
      throw new Error ('Error en el modelo actualizarUser')
    }
  }

////////////// FUNCION PARA ELIMINAR UN USUARIOS ///////////
  static async deleteUser (data){
    let eliminarUser = [ data ]
    try {
        let resultado = await sequelize.query(`DELETE FROM usuarios WHERE id_usuarios = ? `,
        {replacements : eliminarUser, type : sequelize.QueryTypes.SELECT})
        return resultado
    } catch (err) {
        console.log(err);
        throw new Error ('Error en el modelo deleteUser')
    }
}

}