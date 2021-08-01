// DEFINICIÓN DE VARIABLES

var usuario = "";
var contrasenia = "";
var userLogged = false;
var opcionSeleccionada = 0;
let tries = 3;
var ETH = 20;
var BTC = 40;
var SHIB = 1000;
var SUN = 1000;
var ADA = 2000;
var DOT = 3000;

// FUNCIONES DE LA APLICACIÓN

// Mostrar el menú en la consola

function muestraMenu(){

    // Muestra las opciones
    console.log("        ");
    console.log("OPCIONES");
    console.log("1. Mostrar la tabla de valores");
    console.log("2. Editar uno de los valores");
    console.log("3. Borrar uno de valores");
    console.log("4. Salir del sistema");

}

function mostrarTabla(){

    // Limpia la consola
    console.clear();
    // Muestra los valores
    console.log(`Moneda  Valor`);
    console.log(`ETH     ${ETH}`);
    console.log(`BTC     ${BTC}`);
    console.log(`SHIB    ${SHIB}`);
    console.log(`SUN     ${SUN}`);
    console.log(`ADA     ${ADA}`);
    console.log(`DOT     ${DOT}`);

}

function editarValor(){

    // Ingrese el nombre de la moneda
    var nombreMoneda;
    do{
        nombreMoneda = prompt("Ingrese el nombre de la moneda");    
    } while((nombreMoneda != "ETH" && nombreMoneda != "BTC" && nombreMoneda != "SHIB" && nombreMoneda != "SUN"  && nombreMoneda != "ADA" && nombreMoneda != "DOT"))
    
    // Ingrese el nuevo valor
    let nuevoValor = Number(prompt("Por favor, ingrese el nuevo valor"));
    
    // Asigna el nuevo valor
    switch(nombreMoneda)
    {
        case "ETH":
            ETH = nuevoValor;
            break;
        case "BTC":
            BTC = nuevoValor;
            break;
        case "SHIB":
            SHIB = nuevoValor;
            break;
        case "SUN":
            SUN = nuevoValor;
            break;
        case "ADA":
            ADA = nuevoValor;
            break;
        case "DOT":
            DOT = nuevoValor;
            break;
    }

}

function borrarValor(){

    // Ingrese el nombre de la moneda a borrar
    var nombreMoneda;
    do{
        nombreMoneda = prompt("Ingrese el nombre de la moneda");    
    } while((nombreMoneda != "ETH" && nombreMoneda != "BTC" && nombreMoneda != "SHIB" && nombreMoneda != "SUN"  && nombreMoneda != "ADA" && nombreMoneda != "DOT"))
    
    // Borra el valor
    switch(nombreMoneda)
    {
        case "ETH":
            ETH = 0;
            break;
        case "BTC":
            BTC = 0;
            break;
        case "SHIB":
            SHIB = 0;
            break;
        case "SUN":
            SUN = 0;
            break;
        case "ADA":
            ADA = 0;
            break;
        case "DOT":
            DOT = 0;
            break;
    }

}

function salirDelSistema(){
    // Cambia valor de la variable
    userLogged = false;
    // Muestra mensaje
    console.log("    ");
    console.log("Proceso de logout exitoso");
}

function ingresarAlSistema(){
    // Limpia la consola
    console.clear();
    do{
        // Solicita usuario
        usuario = prompt("Ingrese el nombre de usuario");
        usuario = usuario.toString();
        // Solicita contraseña
        contrasenia = prompt("Ingrese la contraseña del usuario");
        contrasenia = contrasenia.toString();

        muestraValores();

        // Verifica datos ingresados
        if ((usuario == "coderhouse") && (contrasenia == "16810")){
            userLogged = true;
        } else {
            tries--;
            console.log("Datos incorrectos, intente una vez más");
        }
    } while (tries>0 && userLogged == false)

     if (tries=0){
        console.log("Superó la cantidad de tres intentos"); 
     }
}

function muestraValores(){
    console.log("Usuario: " + usuario);
    console.log("Contrasenia: " + contrasenia);
    console.log("Intentos: " + tries);
    console.log("Opción: " + opcionSeleccionada);
    console.log("userLogged: " + userLogged);
}

do{

    if (userLogged){
        muestraMenu();
        opcionSeleccionada = Number(prompt("Ingrese una de las opciones"));
        switch(opcionSeleccionada){
            case 1:
                mostrarTabla();
                break;
            case 2:
                editarValor();
                break;
            case 3:
                borrarValor();
                break;
            case 4:
                salirDelSistema();
                break;
            default:
                console.log("Esa opción no existe, pruebe nuevamente"); 
                break;
        }
    } else {
        ingresarAlSistema();
    }

} while(opcionSeleccionada != 4)

