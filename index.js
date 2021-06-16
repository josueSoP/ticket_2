const express = require('express'),
    multer = require('multer'),
    storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './archivos')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    }),
    upload = multer({storage}),
    app = express();

app.get('/', (req, res) => {
    res.sendFile('/index.html', { root: __dirname })
})

app.post('/subir', upload.single('archivo'), (req, res) => {
    console.log(req.file) // Nos devuelve un objeto con la información de nuestro archivo
    res.send('Archivo subido correctamente')
})

app.listen(3000, () => console.log('SERVIDOR FUNCIONANDO'))