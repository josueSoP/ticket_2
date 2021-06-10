const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

//Definir mi Modelo con que voy a trabajar
const Seguidores = sequelize.define('seguidores', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emisor: {
      type: DataTypes.INTEGER,
      references: {
          model: 'usuarios',
          key: 'id'
       }
    },
    receptor: {
      type: DataTypes.INTEGER,
      references: {
          model: 'usuarios',
          key: 'id'
       }
    },
    texto : {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    fecha: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = Seguidores
