class Usuario {constructor (nombre, apellido, dni, nacimiento, mail, telefono, password){

    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.nacimiento = nacimiento;
    this.mail = mail;
    this.telefono = telefono;
    this.password = password;

}}

/*CODIGO PARA PRESETEAR USUARIOS EN LOCAL STORAGE
let usuario1 = new Usuario ("Juan", "Perez", 38383838, "1990-10-10", "juanperez@gmail.com", "155505050", "1234");

let usuario2 = new Usuario ("Maria", "Sanchez", 40404040, "1995-09-12", "mariasanchez@gmail.com", "155202020", "1234");

let usuario3 = new Usuario ("Ana", "Jimenez", 22222222, "1972-04-01", "jimenezana@gmail.com", "155989898", "1234");

let usuarios_cargados = [usuario1, usuario2, usuario3];

let usuarios_JSON = JSON.stringify(usuarios_cargados);

localStorage.setItem("Usuarios", usuarios_JSON);*/



function validar_usuario (){

    let dni_usuario = document.getElementById("dni");
    let password_usuario = document.getElementById("password");

    let usuarios_credisur = JSON.parse(localStorage.getItem("Usuarios"));

    let usuario_valido = usuarios_credisur.find(usuario=> usuario.dni == dni_usuario.value && usuario.password== password_usuario.value);

    if(

        usuario_valido){

                window.location.href ='./pedir_prestamo/prestamo.html';
        }
    
    else{

        swal.fire ({
            icon: "error",
            title:"Dni o Contraseña no validos.",
            text: "El Dni o Contraseña no fueron encontrados. Intente nuevamente o Registrese",
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

let boton = document.getElementById ("inicio_sesion");

boton.addEventListener("click", validar_usuario);



let cotizacion_dolar_oficial = async function(){

    let resultado = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
    let precios_dolar = await resultado.json();

    swal.fire ({
        icon: "info",
        title:"Precio Dolar Oficial",
        text: `Compra: ${precios_dolar[0].casa.compra} - Venta: ${precios_dolar[0].casa.venta}`,
        footer:"",
        showClass:{
            popup:'animate_animated animate_bounceInRigth'
        },
        hidenClass:{
            popup: 'animate_animated animate_hinge'
        }
    })
}

let boton_dolar_oficial = document.getElementById ("dolar_oficial");

boton_dolar_oficial.addEventListener("click", cotizacion_dolar_oficial);


let cotizacion_dolar_blue = async function(){

    let resultado = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
    let precios_dolar = await resultado.json();

    swal.fire ({
        icon: "info",
        title:"Precio Dolar Blue",
        text: `Compra: ${precios_dolar[1].casa.compra} - Venta: ${precios_dolar[1].casa.venta}`,
        footer:"",
        showClass:{
            popup:'animate_animated animate_bounceInRigth'
        },
        hidenClass:{
            popup: 'animate_animated animate_hinge'
        }
    })
}



let boton_dolar_blue = document.getElementById ("dolar_blue");

boton_dolar_blue.addEventListener("click", cotizacion_dolar_blue);