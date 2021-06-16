const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

//Definir mi Modelo con que voy a trabajar
const InfoInicio = sequelize.define('info_inicio', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    co_BD: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    co_apis: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    co_testing: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    co_seguridad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    co_teoriaObj: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })

  const Tecnologias = sequelize.define('tecnologias', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    te_nodeJs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    te_frontend: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    te_swagger: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    te_JS: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })
  
  const Desempeno = sequelize.define('desempeno', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    de_calidadCod: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    de_velEntrega: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    de_performanceCod: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })
  
  const Blandas = sequelize.define('blandas', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hb_enfocado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hb_trabajoEq: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hb_comprometido: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hb_comunicacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hb_aprendizaje: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hb_resProblem: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })
  const Entornos = sequelize.define('entornos', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ep_github: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ep_trello: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ep_slack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ep_agiles: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: true
  })

  module.exports = {InfoInicio,Tecnologias,Desempeno,Blandas,Entornos}
