const controladorPerfile = require('../controllers/controller.perfiles')
const midd = require('../../middleware/midd.verificacion');
var multer = require ('multer');
// require('console-png').attachTo(console);
const almacena = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
const upload = multer({ storage: almacena})


/////////////////// RUTAS DEl PERFIL ///////////////////////////
module.exports = async (app)=> {
    // nos muestra nuestro perfil con la informacion agregada al registrarnos
    //  es como el listar usuarios (solo vemos la info y tenemos botones)
    app.get('/perfil',  async (req,res)=>{
        try{
            res.render('perfil.ejs')
        }catch (err){
            console.log(err)
            res.status(400).json('Error al dirigirse al get Crear Perfil')
        }
    })
/////////Rutas para agregar y guardar un nuevo registro////
    app.get('/crearPerfil',  async (req,res)=>{
        try{
            res.render('crearPerfil.ejs')
        }catch (err){
            console.log(err)
            res.status(400).json('Error al dirigirse a la pagina CREAR PERFIL')
        }
    })

    app.post('/guardarPerfil', async (req,res)=>{
        data = req.body
        try{
            let resultado = await controladorPerfile.guardarPerfil(data)
            if(resultado) {
                // res.redirect('/crearInfoInicio')
                console.log('Perfil Agregado Correctamente');
                res.status(200).send({message: 'usuario agregado correctamente',data});
            }
        }catch (err){
            res.status(400).send({message: 'No se pudo registrar el usuario'});
            console.log('NO Agregado ');
        }
    })

/////////rutas para modificar un perfil
    app.get('/editPerfil/:id', async (req,res)=>{//traemos la informacion
        let data = req.params.id;
        try {
            let resultado = await controladorPerfile.buscarPerfil(data)
            if(resultado){
            // res.render('crearPerfil.ejs', {result:resultado.dataValues })
                res.status(200).send({message: 'usuario encontrado',resultado});
            }else{
                res.status(400).send({message: 'No se encontro id'});
            }
        }catch (err){
            res.status(400).json('Error al dirigirse a la pagina EDITAR PERFIL')
        }
    })

    app.post('/editPerfil/:id', midd.verificacionUsuario, async (req, res)=>{
        let id = req.params.id;
        let data = req.body;
        try {
            let resultado = await controladorPerfile.modificarPerfil(id, data);
            res.status(200).send({message: 'perfil editado correctamente', resultado});
            // res.redirect('/perfil');
        } catch (error) {
            res.status(400).json('No se puedo modificar el perfil')
        }
    });

//////////////ruta para listar perfiles
    app.get('/perfiles', midd.verificacionUsuario, async(req,res)=> {
        try {
            let resultado = await controladorPerfile.listarPerfiles()
            res.render('login/listaRegistro.ejs', {results:resultado});
        }catch (err){
            console.log(err)
            res.status(400).json('Error al dirigirse a la ruta vistas')
        }
    })

////////////imagen //////////////
    app.get('/archivo', (req, res) => {
        res.render('imagen.ejs')
    })

    app.post('/subir', upload.single('imagen'), (req, res) => {
        console.log(req.file) // Nos devuelve un objeto con la información de nuestro archivo
        res.send('Archivo subido correctamente')
    })
}
