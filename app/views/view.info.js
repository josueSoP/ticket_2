const controladorInfo = require('../controllers/controller.infoInicio')

module.exports = async (app)=> {
// hacer que funcione la plantilla de llenado de info desl inicio
    app.get('/crearInfoTablas', async (req,res)=>{
        try{
            res.render('infoTablas.ejs');
        }catch (err){
            res.estatus(400).json('No se puede mostrar')
        }
    })
/////////Rutas para agregar y guardar un nuevo registro////
    // app.get('/crearInfoInicio',  async (req,res)=>{
    //     try{
    //         res.render('infoInicio.ejs')
    //     }catch (err){
    //         console.log(err)
    //         res.status(400).json('Error al dirigirse a la pagina CREAR')
    //     }
    // })

    // app.post('/guardarInfoInicio', async (req,res)=>{
    //     data = req.body
    //     try{
    //         let resultado = await controladorInfo.guardarUsuario(data)
    //         if(resultado) {
    //             res.redirect('/login')
    //             console.log('Usuario Agregado Correctamente');
    //             // res.status(200).send({message: 'usuario agregado correctamente',data});
    //         }
    //     }catch (err){
    //         res.status(400).send({message: 'No se pudo registrar el usuario'});
    //         console.log('NO Agregado ');
    //     }
    // })

}
