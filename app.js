//modulos
const express = require('express');
const app = express();
require('dotenv').config();

//carga de rutas
const sequelize = require('./db/db');
// const rutaAmigos = require('./app/routes/route.amigos');
// const rutaComentarios = require('./app/routes/route.comentarios');
const rutaInfo = require('./app/routes/route.info');
const rutaLogin = require('./app/routes/route.login');
// const rutaSolicitud = require('./app/routes/route.solicitud');
const rutaUsuarios = require('./app/routes/route.usuarios');

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
// rutaAmigos(app);
// rutaComentarios(app);
rutaInfo(app);
rutaLogin(app);
// rutaSolicitud(app);
rutaUsuarios(app);


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

