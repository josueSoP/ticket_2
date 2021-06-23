const controladorInfo = require('../controllers/controller.info')
const controladorUsuarios = require('../controllers/controller.usuarios')
const midd = require('../../middleware/midd.verificacion');


module.exports = async (app)=> {

///////////// RUTA PARA LISTAR TABLAS CON INFOR ////////////////////
    app.get('/listarTablas',midd.verificacionUsuario, async(req,res)=> {
    // app.get('/listarTablas', async(req,res)=> {
        try {
            let resultado = await controladorInfo.listarInfoTablas()
            // res.render('login/listaRegistro.ejs', {results:resultado});
            res.status(200).send({ resultado});
        }catch (err){
            console.log(err)
            res.status(400).json('Error al dirigirse a la ruta listarTablas')
        }
    })

// ///////////// RUTAS PARA AGREGAR Y GUARDAR TABLAS //////////////////
    app.get('/crearInfoTablas', async (req,res)=>{
        try{
            res.render('infoTablas.ejs');
        }catch (err){
            res.estatus(400).json('No se puede mostrar get infoTablas')
        }
    })

    app.post('/guardarInfotablas', async (req,res)=>{
        data = req.body
        try{
            let resultado = await controladorInfo.guardarTablas(data)
            if(resultado) {
                // res.redirect('/perfil')
                console.log('Tablas Agregadas Correctamente');
                res.status(200).send({message: 'Informacion guardada correctamente',data});
            }
        }catch (err){
            res.status(400).send({message: 'No se pudieron guardar las tablas'});
            console.log('NO se agrego informacion ');
        }
    })

    //solucion para el endpoint de arriba, el de arriba solo ingresa los datos, yo quiero referenciarlo a un id
    /////////opcion para agregar tablas al conectar el id de las tablas con el id del usuario AUN NO LO LOGRO
    app.post('/guardarInfotablas/:id_usuarios', async (req,res)=>{
        let id = req.params.id_usuarios;
        data = req.body
        try{
            let resultado = await controladorUsuarios.existenciaId(id)
            if(resultado) {
                let guardar = await controladorInfo.guardarTablaCono(id, data)
                console.log('Tablas Agregadas Correctamente');
                res.status(200).send({message: 'Informacion guardada correctamente',guardar});
            }else{
                res.status(400).send({message: 'No se encontro el id de usuario'});
            }
        }catch (err){
            res.status(400).send({message: 'No se pudieron guardar las tablas'});
            console.log('NO se agrego informacion ');
        }
    })

    
}




// ////////////// RUTAS PARA MODIFICAR USUARIO ///////////////////////
//     app.get('/buscar/:id_usuarios', async (req,res)=>{
//         let data = req.params.id_usuarios;
//         try {
//             let resultado = await controladorUsuarios.buscarUsuario(data)
//             if(resultado){
//                 // res.render('login/editaRegistro.ejs', {result:resultado.dataValues })
//                 res.status(200).send({message: 'usuario  encontrado', resultado});
//             }else{
//                 res.status(400).send({message: 'No se encontro id'});
//             }

//         }catch (err){
//             res.status(400).json('Error al dirigirse a la pagina EDITAR')
//         }
//     })

//     app.post('/update/:id_usuarios', async (req, res)=>{
//         let id = req.params.id_usuarios;
//         let data = req.body;
//         try {
//             let resultado = await controladorUsuarios.buscarUsuario(id)
//             if(resultado){
//                 let resultado = await controladorUsuarios.actualizarUsuario(id, data);
//                 res.status(200).send({message: 'usuario editado correctamente', resultado});
//                 // res.redirect('/perfil');  
//             }else{
//                 res.status(400).send({message: 'No se modifico porque no existe id'});
//             }          
//         } catch (error) {
//             res.status(400).json('No se puedo modificar el usuarios')
//         }
//     });
//     /////////rutas para modificar un perfil
//     app.get('/buscarinfo/:id', async (req,res)=>{
//         let data = req.params.id;
//         try {
//             let resultado = await controladorInfo.buscarTablas(data)
//             if(resultado){
//                 // res.render('crearPerfil.ejs', {result:resultado.dataValues })
//                 res.status(200).send({message: 'informacion encontrada',resultado});
//             }else{
//                 res.status(400).send({message: 'No se encontro id'});
//             }
//         }catch (err){
//             res.status(400).json('Error al dirigirse a la pagina EDITAR PERFIL')
//         }
//     })

//     app.post('/guardarInfoTablas/:id', async (req, res)=>{
//         let id = req.params.id;
//         let data = req.body;
//         try {
//             let resultado = await controladorInfo.modificarTablas(id, data);
//             res.status(200).send({message: 'perfil editado correctamente', resultado});
//         }catch (error) {
//             res.status(400).json('No se puedo editar la informacion')
//         }
//     });
