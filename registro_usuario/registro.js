
class Usuario {constructor (nombre, apellido, dni, nacimiento, mail, telefono, password){

    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.nacimiento = nacimiento;
    this.mail = mail;
    this.telefono = telefono;
    this.password = password;

}}

function registro_usuario (){

    let nombre_ingresado = document.getElementById("nombre").value;
    let apellido_ingresado = document.getElementById("apellido").value;
    let dni_ingresado = parseInt(document.getElementById("dni").value);
    let nacimiento_ingresado = document.getElementById("nacimiento").value;
    let mail_ingresado = document.getElementById("mail").value;
    let telefono_ingresado = document.getElementById("telefono").value;
    let password_ingresado = document.getElementById("password").value;


    let usuarios_credisur = JSON.parse(localStorage.getItem("Usuarios"));

    let usuario_existe;

    if (usuarios_credisur) {
        usuario_existe = usuarios_credisur.find(usuario=> usuario.dni == dni_ingresado);
    } else {
        usuarios_credisur = [];
    }

    if (usuario_existe){
        swal.fire ({
            icon: "warning",
            title:"Usuario Existente",
            text: "El Usuario que deseas registrar ya existe en nuestro sistema.",
            footer:"",
            showClass:{
                popup:'animate_animated animate_bounceInRigth'
            },
            hidenClass:{
                popup: 'animate_animated animate_hinge'
            }
        });
    } 
    else {
        let edad =  new Date().getFullYear() - new Date(nacimiento_ingresado).getFullYear();

        if (edad && (edad <= 65 && edad >= 18)) {

            let nuevo_usuario = new Usuario (nombre_ingresado,apellido_ingresado,dni_ingresado,nacimiento_ingresado,mail_ingresado, telefono_ingresado,password_ingresado);

            usuarios_credisur.push(nuevo_usuario);
            localStorage.setItem("Usuarios", JSON.stringify(usuarios_credisur));


            swal.fire ({
                icon: "success",
                title:"Nuevo Usuario Registrado",
                text: "Ya estas registrado! Ahora podras ingresar a Credi-Sur Prestamos Personales",
                footer:"",
                showClass:{
                    popup:'animate_animated animate_bounceInRigth'
                },
                hidenClass:{
                    popup: 'animate_animated animate_hinge'
                }
            })

            setTimeout(()=>{
                window.location.href ='../index.html';
            },5000);
            

        } else {

            swal.fire ({
                icon: "error",
                title:"No cumple requisitos",
                text: "El Usuario que deseas registrar no cumple con los requisitos necesarios.",
                footer:"",
                showClass:{
                    popup:'animate_animated animate_bounceInRigth'
                },
                hidenClass:{
                    popup: 'animate_animated animate_hinge'
                }
            })
        }
    }
}

let boton = document.getElementById ("boton_registro_usuario");

boton.addEventListener("click", registro_usuario);