//modulos
const express = require('express');
const app = express();
require('dotenv').config();

//carga de rutas
const sequelize = require('./db/db');
const rutaUsuarios = require('./app/routes/route.usuarios');
const rutaFollow = require('./app/routes/route.follow');
const rutaPublicaciones = require('./app/routes/route.publicaciones');
const rutaPerfiles = require('./app/routes/route.perfiles');
const rutaInfo = require('./app/routes/route.info');

const Usuarios = require('./app/models/model.usuarios');
const Follow = require('./app/models/model.follow');
const Publicaciones = require('./app/models/model.publicaciones');
const Perfiles = require('./app/models/model.perfiles');
const Conocimientos = require('./app/models/tablas/model.conocimientos');
const Tecnologias = require('./app/models/tablas/model.tecnologias');
const Desempeno = require('./app/models/tablas/model.desempeno');
const Blandas = require('./app/models/tablas/model.blandas');
const Entornos = require('./app/models/tablas/model.entornos');
const Extra = require('./app/models/tablas/model.extra');

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
rutaPublicaciones(app);
rutaPerfiles(app);
rutaInfo(app);

//Iniciar el Servidor
async function inicioServidor() {
    try {
        await Conocimientos.sync({alter:true});        
        await Tecnologias.sync({alter:true});        
        await Desempeno.sync({alter:true});        
        await Blandas.sync({alter:true});        
        await Entornos.sync({alter:true});        
        await Extra.sync({alter:true});        
        await Perfiles.sync({alter:true});        
        await Follow.sync({alter:true});        
        await Publicaciones.sync({alter:true}); 
        await Usuarios.sync({alter:true});
        
        await Usuarios.findOrCreate({
            where: {
                nombres: 'josue', 
                apellidos: 'soto', 
                email: 'josue@mail.com', 
                usuario: 'josu', 
                pass: 'jo123'
            }
        })
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

