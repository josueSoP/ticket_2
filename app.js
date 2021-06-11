//modulos
const express = require('express');
const app = express();
require('dotenv').config();

//carga de rutas
const sequelize = require('./db/db');
const vistaUsuarios = require('./app/views/view.usuarios');
const Usuarios = require('./app/models/model.usuarios');


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//cors


//rutas o vistas
app.use (vistaUsuarios);

//middleware para captura de errores globales.
app.use((err, req, res, next)=> {
    console.log(err);
    if (!err){
        return next();
    }
    return res.status(500).json('Se produjo un error inesperado, intente nuevamente')
});

//Iniciar el Servidor
async function inicioServidor() {
    try {
        await Usuarios.sync({alter:true});        
        // await Usuarios.findOrCreate({
        //     where: {
        //         nombres: 'mario', 
        //         apellidos: 'angeles', 
        //         email: 'mario@mail.com', 
        //         usuario: 'marioo', 
        //         pass: 'm123', 
        //         imagen: 'a123ajsd'
        //     }
        // })
        await sequelize.authenticate();
        console.log('Conexion con la DB correcta!')
        app.listen(process.env.PORT, function (){
            console.log(`Sistema iniciado en el http://${process.env.HOST}:${process.env.PORT}`)
        })
    }catch (err){
        console.log(err)
        console.log('No se pudo conectar con la DB')
    }
}

inicioServidor();

//exportar 
module.exports = app;

