

let nacimiento_usuario = prompt ("Ingrese su año de nacimiento");


while (nacimiento_usuario >= 2004 || nacimiento_usuario <= 1957){

    console.log("No puede solicitar un prestamo ya que no cumple con los requisitos. Intentelo nuevamente.");
    nacimiento_usuario = prompt ("Ingrese su año de nacimiento");

}
console.log("Bienvenido a CrediSur, Prestamos Personales");


let monto_solicitado = parseFloat (monto_valido());
console.log("Solicitaste: $" , monto_solicitado);

let plazo_devolucion = parseInt (plazo_valido());
console.log("Usted Seleccionó: " , plazo_devolucion, "dias para su devolución.");


let interes = interes_prestamo(monto_solicitado , plazo_devolucion);
console.log ("Usted solicitó: $",monto_solicitado,"El total a devolver, incluyendo el interes, será de: $", (monto_solicitado + interes), "en un plazo de:",plazo_devolucion,"dias"); 

function monto_valido (){

    let monto_ingresado = parseFloat (prompt("Ingrese el monto que desea solicitar:"));
    while ( typeof monto_ingresado != "number"){

    
    console.log("El monto ingresado no es valido ya que no es numerico. Intentelo nuevamente.");
    monto_ingresado = parseFloat(prompt("Ingrese el monto que desea solicitar:"));
    
}
return monto_ingresado
}

function plazo_valido(){

    let plazo_ingresado = parseFloat(prompt("Seleccione el plazo de devolucion: 90/120/365"));
    

    while (plazo_ingresado != 60 && plazo_ingresado != 90 && plazo_ingresado != 365){
        console.log("Ese plazo de Devolucion es inexistente. Intentelo nuevamente.");
        plazo_ingresado = parseFloat(prompt("Seleccione el plazo de devolucion: 90/120/365"));
    }
    return plazo_ingresado

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