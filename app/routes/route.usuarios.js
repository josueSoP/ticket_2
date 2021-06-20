const controladorUsuarios = require('../controllers/controller.usuarios')
const midd = require('../../middleware/midd.verificacion');

module.exports = async (app)=> {       

////////////// RUTA PARA LISTAR USUARIOS //////////////////////////////
    app.get('/usuarios', async(req,res)=> {
        try {
            let resultado = await controladorUsuarios.listarRegistros()
            // res.render('login/listaRegistro.ejs', {results:resultado});
            res.status(200).send({ resultado});

        }catch (err){
            console.log(err)
            res.status(400).json('Error al dirigirse a la ruta vistas')
        }
    })
    
///////// RUTAS PARA AGREGAR Y GUARDAR USUARIOS ///////////////////////
    app.get('/crear',  async (req,res)=>{
        try{
            res.render('login/registro.ejs')
        }catch (err){
            console.log(err)
            res.status(400).json('Error al dirigirse a la pagina CREAR')
        }
    })

    app.post('/registro', async (req,res)=>{
        let data = req.body
        try{
            let resultado = await controladorUsuarios.existenciaUsuario(data)
            if (resultado) {
                res.status(400).send({message: `No se pudo agregar. El usuario: ${data.usuario} ya existe`}); 
            } else {
                await controladorUsuarios.guardarUsuario(data)
                // res.redirect('/crearInfoInicio')
                console.log('Usuario Agregado Correctamente');
                res.status(200).send({message: 'usuario agregado correctamente',data});
            }
        }catch (err){
            res.status(400).send({message: 'No se pudo registrar el usuario'});
            console.log('NO Agregado ');
        }
    })

//////////// RUTAS PARA MODIFICAR PARA MODIFICAR USUARIO //////////////
    app.get('/buscar/:id_usuarios', async (req,res)=>{
        let data = req.params.id_usuarios;
        try {
            let resultado = await controladorUsuarios.buscarUsuario(data)
            if(resultado){
                // res.render('login/editaRegistro.ejs', {result:resultado.dataValues })
                res.status(200).send({message: 'usuario  encontrado', resultado});
            }else{
                res.status(400).send({message: 'No se encontro id'});
            }

        }catch (err){
            res.status(400).json('Error al dirigirse a la pagina EDITAR')
        }
    })

    app.post('/update/:id_usuarios', async (req, res)=>{
        let id = req.params.id_usuarios;
        let data = req.body;
        try {
            let resultado = await controladorUsuarios.buscarUsuario(id)
            if(resultado){
                let resultado = await controladorUsuarios.actualizarUsuario(id, data);
                res.status(200).send({message: 'usuario editado correctamente', resultado});
                // res.redirect('/perfil');  
            }else{
                res.status(400).send({message: 'No se modifico porque no existe id'});
            }          
        } catch (error) {
            res.status(400).json('No se puedo modificar el usuarios')
        }
    });

////////////// RUTA PARA ELIMINAR USUARIOS ///////////////////////////
    app.get('/eliminar/:id_usuarios', async (req,res)=>{
        let data = req.params.id_usuarios;
        try {
            await controladorUsuarios.eliminarUsuario(data)
            res.status(200).send({message: `usuario ${data} eliminado correctamente`});
            // res.redirect('/login');      
        }catch (err){
            res.status(400).json('No se puedo eliminar el usuario')
        }
    })
}
