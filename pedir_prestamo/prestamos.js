

function calcular_interes(){

    let monto_a_solicitar = parseInt (document.getElementById("monto_a_solicitar").value);
    
    let plazo_devolucion = parseInt (document.getElementById("plazo_devolucion").value);

    debugger

    let interes_calculado = interes_prestamo (monto_a_solicitar, plazo_devolucion);

    let monto_total_html = document.getElementById ("monto_total");

    let monto_total = interes_calculado + monto_a_solicitar

    monto_total_html.querySelector ("h6").innerText = "Usted solicitó $ "+monto_a_solicitar + " Con un Plazo de Devolucion de "+plazo_devolucion+ " dias. El monto total solicitado incluido el interes, seria $" + monto_total + "."

    monto_total_html.style.display = "block";


}

function mostar_cartel_solicitud (){


    swal.fire ({
        icon: "success",
        title:"Su prestamo fue aprobado!",
        text: "Su prestamo fue aprobado. Pronto recibiras por e-mail los requisitos a seguir. Gracias por confiar en Credi-Sur.",
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
}






function interes_prestamo (monto_solicitado , plazo_devolucion){

    let interes;
    
        if (plazo_devolucion == 90){
            interes = monto_solicitado * 0.30;
            return interes
        }
    
        else if (plazo_devolucion == 120){
            interes = monto_solicitado * 0.45;
            return interes
    
        }
        else if (plazo_devolucion == 365){
        interes = monto_solicitado * 0.60;
        return interes
    }}

    let boton = document.getElementById ("calcular_boton");

    boton.addEventListener("click", calcular_interes);

    let boton2 = document.getElementById ("solicitud_prestamo_ok");

    boton2.addEventListener("click", mostar_cartel_solicitud);

