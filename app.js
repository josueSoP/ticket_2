const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./db/db');
// const vistaProyecto = require('./MVC/views/view.proyecto');
const vistaUsuarios = require('./app/views/view.usuarios');
// const Proyecto = require('./MVC/models/model.proyectos');
// const Flujo = require('./MVC/models/model.flujos');
const Usuarios = require('./app/models/model.usuarios');

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

//Iniciar el Servidor
async function inicioServidor() {
    try {
        // await Flujo.sync({alter:true});
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

// vistaProyecto(app);
vistaUsuarios(app);