const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

const Perfiles = sequelize.define('perfiles', {
  id : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  imagen : {
      type: DataTypes.STRING(50),
      allowNull: false,
  },
  nombres : {
      type: DataTypes.STRING(50),
      allowNull: false,
  },
  apellidos: {
      type: DataTypes.STRING(50),
      allowNull: false,
  },
  ciudad: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  pais: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estudios: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  idiomas: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  linkedin: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  hombies: {
    type: DataTypes.STRING(300),
    allowNull: false
  },
},{
  timestamps: true
})

module.exports = Perfiles;

  module.exports.recuperarInfoUser = async (usr) => {
    let resultado = await Perfiles.findAll({where: {nombres:usr.nombres, apellidos: usr.apellidos}})
    if (resultado === null){
      return false
    }else {
      return resultado[0]
    }
  }

    //////////// MODELO PARA MODIFICAR UN USUARIOS ///////////////////
  module.exports.buscarId = async (data) => {
    try{
      let resultado = await Perfiles.findAll({ where: {id : data} })
      if (resultado === null){
        return false
      }else {
        return resultado[0]
      }
    }catch (err) {
      throw new Error ('No existe este usuario')
    }
  }