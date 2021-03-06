const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

//Definir mi Modelo con que voy a trabajar
const Follow = sequelize.define('seguidores', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {//al que sigo
      type: DataTypes.INTEGER,
      references: {
          model: 'usuarios',
          key: 'id'
       }
    },
    followed: {
      type: DataTypes.INTEGER,
      references: {
          model: 'usuarios',
          key: 'id'
       }
    },
    seguidor: {
      type: DataTypes.INTEGER,
      references: {
          model: 'usuarios',
          key: 'id'
       }
      }
  },{
    timestamps: true
  })

  module.exports = Follow
