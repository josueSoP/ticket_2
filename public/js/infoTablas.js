let form = document.getElementById('formInfoInicio');

let bases = document.getElementById('bases'),
    apis = document.getElementById('apis'),
    testing = document.getElementById('testing'),
    seguridad = document.getElementById('seguridad'),
    teoriaObj = document.getElementById('teoriaObj');

let nodeJs = document.getElementById('nodeJs'),
    frontend = document.getElementById('frontend'),
    swagger = document.getElementById('swagger'),
    js = document.getElementById('js');

let calidadCod = document.getElementById('calidadCod'),
    velEntrega = document.getElementById('velEntrega'),
    performanceCod = document.getElementById('performanceCod');

let enfocado = document.getElementById('enfocado'),
    trabajoEq = document.getElementById('trabajoEq'),
    comprometido = document.getElementById('comprometido'),
    comunicacion = document.getElementById('comunicacion'),
    aprendizaje = document.getElementById('aprendizaje'),
    resProblem = document.getElementById('resProblem');

let github = document.getElementById('github'),
    trello = document.getElementById('trello'),
    slack = document.getElementById('slack'),
    agiles = document.getElementById('agiles');

let conExtra = document.getElementById('conExtra');

//Manda el post
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let data = await JSON.parse(localStorage.getItem('dataUsuario'))
    try{
    let resultado = await fetch("http://localhost:3000/registro", { // /nuevousuarios
        method: 'post',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify( {
            "bases": bases.value,
            "apis": apis.value,
            "testing": testing.value,
            "seguridad": seguridad.value,
            "teoriaObj": teoriaObj.value,

            "nodeJs": nodeJs.value,
            "frontend": frontend.value,
            "swagger": swagger.value,
            "js": js.value,

            "calidadCod": calidadCod.value,
            "velEntrega": velEntrega.value,
            "performanceCod": performanceCod.value,

            "enfocado": enfocado.value,
            "trabajoEq": trabajoEq.value,
            "comprometido": comprometido.value,
            "comunicacion": comunicacion.value,
            "aprendizaje": aprendizaje.value,
            "resProblem": resProblem.value,

            "github": github.value,
            "trello": trello.value,
            "slack": slack.value,
            "agiles": agiles.value,

            "conExtra": conExtra.value
        })
    })

    if(resultado.status == 400){
        swal({
            title: "No se pudo guardar informacion",
            text: "Error al guardar la informacion",
            icon: "error",
          });
    } else {
        swal({
            title: "Informacion Agregada Correctamente",
            icon: "success",
          });
        location.href = '/crearInfoInicio'
    }
} catch (error) {
    swal({
        title: "Error al Guardar",
        text: "Refresca la pagina o intenta mas tarde",
        icon: "error",
      });
}
})