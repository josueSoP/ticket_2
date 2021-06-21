let form = document.getElementById('formPerfil');
let nombres = document.getElementById('nombres_user');
let apellidos = document.getElementById('apellidos_user');
let usuario = document.getElementById('usuario_user');
let email = document.getElementById('email_user');
let pass = document.getElementById('pass_user');
let imagen = document.getElementById('imagen_user');
let ciudad = document.getElementById('ciudad_user');
let pais = document.getElementById('pais_user');
let edad = document.getElementById('edad_user');
let estudios = document.getElementById('estudios_user');
let linkedin = document.getElementById('linkedin_user');
let hobies = document.getElementById('hobies_user');
let cv = document.getElementById('cv_user');
let idData = document.getElementById('idUsuario')

//Manda el post
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // let data = await JSON.parse(localStorage.getItem('dataUsuario'))

    try {
        let resultado = await fetch("http://localhost:3000/update/" + id_usuarios, { 
        method: 'post',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify( {
            "id_usuarios": parseInt(idData.textContent),
            "nombres": nombres.value,
            "apellidos": apellidos.value,
            "email": email,
            "usuario": usuario.value,
            "pass": pass.value,
            "imagen": imagen.value,
            "ciudad": ciudad.value,
            "pais": pais.value,
            "edad": edad.value,
            "estudios": estudios.value,
            "linkedin": linkedin.value,
            "hobies": hobies.value,
            "cv": cv.value,
        })
    })
    
    if(resultado.status == 400){
        swal({
            title: "ERROR AL MODIFICAR",
            text: "No se pudo modificar el Usuario, intente mas tarde",
            icon: "error",
          });
    } else {
        swal({
            title: "Usuario Actualizado Correctamente",
            icon: "success",
          });
          
          setTimeout(() => {
            location.href = '/usuarios'//+id_usuarios
        }, 3000);
    }
} catch (error) {
    swal({
        title: "No se pudo modificar",
        icon: "error",
      });
}

})

function newFormulario()
{
    nombres.value = ""
    apellidos.value = ""
    email.value = ""
    usuario.value = ""
    pass.value = ""
    imagen.value = ""
    ciudad.value = ""
    pais.value = ""
    edad.value = ""
    estudios.value = ""
    linkedin.value = ""
    hobies.value = ""
    cv.value = ""
}

async function eliminarPerfil(id_usuarios) {
    let data = await JSON.parse(localStorage.getItem('dataUsuario'))
    swal({
        title: "¿Seguro que quieres eliminar el Usuario?",
        text: "Una vez eliminado no lo puedes recuperar",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            try {
                let resultado = fetch("http://localhost:3000/eliminar/" + id_usuarios, {
                method: 'get',
                headers: {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${data.token}`
                }
                })
                if(resultado.status == 400){
                    swal({
                        title: "No tienes permiso para eliminar usuarios" ,
                        icon: "error",
                      });
                } else {
                    swal({
                        title: "Usuario Eliminado Correctamente",
                        icon: "success",
                    });
                    setTimeout(() => {
                        location.href = '/usuarios'
                    }, 3000);
                }
    
            } catch (error) {
                swal({
                    title: "No tienes permiso para eliminar usuarios",
                    icon: "error",
                  });
            }
        } else {
            swal({
                title: "Usuario no eliminado",
                icon: "success",
              });
        }
      });
}