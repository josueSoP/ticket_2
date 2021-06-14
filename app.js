//modulos
const express = require('express');
const app = express();
require('dotenv').config();

//carga de rutas
const sequelize = require('./db/db');
const vistaUsuarios = require('./app/views/view.usuarios');
const vistaFollow = require('./app/views/view.follow');
const vistaPublicaciones = require('./app/views/view.publicaciones');
const vistaChat = require('./app/views/view.chat');
const Usuarios = require('./app/models/model.usuarios');
const Follow = require('./app/models/model.follow');
const Publicaciones = require('./app/models/model.publicaciones');
const Chat = require('./app/models/model.chat');

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
vistaUsuarios(app);
vistaFollow(app);
vistaPublicaciones(app);
vistaChat(app);

//Iniciar el Servidor
async function inicioServidor() {
    try {
        await Chat.sync({alter:true});        
        await Follow.sync({alter:true});        
        await Publicaciones.sync({alter:true}); 
        await Usuarios.sync({alter:true});
        await Usuarios.findOrCreate({
            where: {
                nombres: 'josue', 
                apellidos: 'soto', 
                email: 'josue@mail.com', 
                usuario: 'josu', 
                pass: 'jo123',
                imagen: 'jojsojs'
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

