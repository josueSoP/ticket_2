const controladorUsuarios = require('../controllers/controller.usuarios')
const midd = require('../../middleware/midd.verificacion');

module.exports = async (app)=> {
    ////////////// LOGIN DE USUARIOS /////////////////////////
    app.get('/login', async (req,res)=>{
        try{
            res.render('login/login.ejs');
        }catch (err){
            res.estatus(400).json('No se puede mostrar')
        }
    })

    app.post('/login', async (req,res)=>{
        let usuario = req.body
        try {
            let resultado = await controladorUsuarios.chequearUsuario(usuario)
            if (resultado){
                let usuarioInfo = await controladorUsuarios.datosUsuario(usuario)
                let tokenResult = await controladorUsuarios.generaToken(usuario)
                // res.status(200).send({tokenResult, message: 'usuario y contraseña valido',usuarioInfo});
                res.json({ token: tokenResult, user: usuarioInfo })
            }else {
                throw new Error ("Contraseña Incorrecta")
            }
        }catch (err){
            res.status(400).json({ error: err.message})
        }
    })

////////////////////// REGISTRO de USUARIOS///////////////////////////
       
/////////Rutas para agregar y guardar un nuevo registro////
    app.get('/crear',  async (req,res)=>{
        try{
            res.render('login/registro.ejs')
        }catch (err){
            console.log(err)
            res.status(400).json('Error al dirigirse a la pagina CREAR')
        }
    })

    app.post('/registro', async (req,res)=>{
        data = req.body
        try{
            let resultado = await controladorUsuarios.guardarUsuario(data)
            if(resultado) {
                res.redirect('/crearPerfil')
                console.log('Usuario Agregado Correctamente');
                // res.status(200).send({message: 'usuario agregado correctamente',data});
            }
        }catch (err){
            res.status(400).send({message: 'No se pudo registrar el usuario'});
            console.log('NO Agregado ');
        }
    })

/////////rutas para modificar un usuario
    app.get('/edit/:id', async (req,res)=>{
        let data = req.params.id;
        try {
            let resultado = await controladorUsuarios.buscarRegistro(data)
            if(resultado){
                res.render('login/editaRegistro.ejs', {result:resultado.dataValues })
                // res.status(200).send({message: 'usuario  encontrado', resultado});
            }else{
                res.status(400).send({message: 'No se encontro id'});
            }

        }catch (err){
            res.status(400).json('Error al dirigirse a la pagina EDITAR')
        }
    })

    app.post('/update/:id', midd.verificacionUsuario, async (req, res)=>{
        let id = req.params.id;
        let data = req.body;
        try {
            let resultado = await controladorUsuarios.modificarUsuario(id, data);
            res.status(200).send({message: 'usuario editado correctamente', resultado});
            // res.redirect('/perfil');            
        } catch (error) {
            res.status(400).json('No se puedo modificar el usuarios')
        }
    });

//////////////ruta para listar usuarios
    app.get('/usuarios', midd.verificacionUsuario, async(req,res)=> {
        try {
            let resultado = await controladorUsuarios.listarRegistros()
            res.render('login/listaRegistro.ejs', {results:resultado});
        }catch (err){
            console.log(err)
            res.status(400).json('Error al dirigirse a la ruta vistas')
        }
    })

////////////ruta para eliminar usuario
    app.get('/delete/:id', midd.verificacionUsuario, async (req,res)=>{
        let data = req.params.id;
        try {
            let resultado = await controladorUsuarios.eliminarRegistro(data)
            if(resultado){
                res.status(200).send({message: 'usuario '+data+' eliminado correctamente'});
                // res.redirect('/login');
            }      
        }catch (err){
            res.status(400).json('No se puedo eliminar el usuario')
        }
    })
}
