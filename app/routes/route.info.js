const controladorInfo = require('../controllers/controller.infoInicio')
// const midd = require('../../middleware/midd.verificacion');

module.exports = async (app)=> {
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
                res.redirect('/perfil')
                console.log('Tablas Agregadas Correctamente');
                // res.status(200).send({message: 'usuario agregado correctamente',data});
            }
        }catch (err){
            res.status(400).send({message: 'No se pudieron guardar las tablas'});
            console.log('NO Agregado ');
        }
    })

    /////////rutas para modificar un perfil
    app.get('/editInfoTablas/:id', async (req,res)=>{
        let data = req.params.id;
        try {
            let resultado = await controladorInfo.buscarPerfil(data)
            if(resultado){
            res.render('crearPerfil.ejs', {result:resultado.dataValues })
                // res.status(200).send({message: 'usuario '+data+' encontrado'});
            }else{
                res.status(400).send({message: 'No se encontro id'});
            }
        }catch (err){
            res.status(400).json('Error al dirigirse a la pagina EDITAR PERFIL')
        }
    })

    app.post('/updateInfoTablas/:id', async (req, res)=>{
        try {
            let resultado = await controladorInfo.modificarPerfil(req.body);
            if(resultado){
                res.redirect('/perfil');
            }
        } catch (error) {
            res.status(400).json('No se puedo modificar el perfil')
        }
    });

//////////////ruta para listar perfiles
    app.get('/tablas', async(req,res)=> {
        try {
            let resultado = await controladorPerfile.listarPerfiles()
            res.render('login/listaRegistro.ejs', {results:resultado});
        }catch (err){
            console.log(err)
            res.status(400).json('Error al dirigirse a la ruta vistas')
        }
    })

}
