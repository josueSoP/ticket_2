//modulos
const express = require('express');
const app = express();
require('dotenv').config();

//carga de rutas
const sequelize = require('./db/db');
const rutaUsuarios = require('./app/routes/route.usuarios');
const rutaFollow = require('./app/routes/route.follow');
// const rutaPublicaciones = require('./app/routes/route.publicaciones');
const rutaPerfiles = require('./app/routes/route.perfiles');
const rutaInfo = require('./app/routes/route.info');

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//middleware para captura de errores globales.
app.use((err, req, res, next)=> {
    console.log(err);
    if (!err){
        return next();
    }

    return res.status(500).json('Se produjo un error inesperado, intente nuevamente')
});

//cors

//rutas o vistas
rutaUsuarios(app);
rutaFollow(app);
// rutaPublicaciones(app);
rutaPerfiles(app);
rutaInfo(app);


//Iniciar el Servidor
async function inicioServidor() {
    try {
        await sequelize.authenticate();
        console.log('Conexion con la DB correcta!')
        app.listen(process.env.PORT, function (){
            console.log(`Sistema iniciado en el puerto ${process.env.PORT}`)
        })
    }catch (err){
        console.log(err)
        console.log('No se pudo conectar con la DB')
    }
}

inicioServidor();

