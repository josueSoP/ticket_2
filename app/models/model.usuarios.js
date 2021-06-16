const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

const Usuarios = sequelize.define('usuarios', {
  id : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombres : {
      type: DataTypes.STRING(50),
      allowNull: false,
  },
  apellidos: {
      type: DataTypes.STRING(50),
      allowNull: false,
  },
  usuario: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  pass: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
},{
  timestamps: true
})

module.exports = Usuarios;

////////MODULOS PARA LOGIN//////////////////
  module.exports.existenciaDeUsuario = async (usr)=>{
  //chequear con la base de datos que exista el usuario
  let resultado = await Usuarios.findOne({where: {usuario:usr.usuario, pass: usr.pass}})
  if (resultado === null){
      return false
  }else {
      return true
  }
  }

module.exports.usuarioAutenticado = async (usr)=>{
//chequear con la base de datos que exista el usuario
let resultado = await Usuarios.findOne({where: {usuario:usr.usuario, pass: usr.pass}})
if (resultado === null){
    return false
}else {
    return true
}
}

module.exports.recuperarInfoUser = async (usr) => {
let resultado = await Usuarios.findAll({where: {usuario:usr.usuario, pass: usr.pass}})
if (resultado === null){
  return false
}else {
  return resultado[0]
}
}

  /////MODULO PARA LISTAR USUARIOSS///////////
  module.exports.listar = async () => {
      let resultado = await sequelize.query('SELECT * FROM usuarios')
      return resultado[0]
    }

    //////////// MODELO PARA MODIFICAR UN USUARIOS ///////////////////
  module.exports.buscarId = async (data) => {
    try{
      let resultado = await Usuarios.findAll({ where: {id : data} })
      if (resultado === null){
        return false
      }else {
        return resultado[0]
      }
    }catch (err) {
      throw new Error ('No existe este usuario')
    }
  }