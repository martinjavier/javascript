/* // Solicita nombre y apellido del usuario

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

// Solicita la edad del usuario

let edad = Number(prompt("Ingrese su edad"));

// Solicita la clave para ingresar

let clave = prompt("Ingresa la contraseña");
clave = clave.toLowerCase();

// Verifica si la clave es correcta

if (clave == "coderhouse")
{
    let verificaNombre = confirm("¿Es " + nombre + " su nombre?");
    let verificaApellido = confirm("¿Es " + apellido + " su apellido?");
    let verificaEdad = confirm("¿Es " + edad + " su edad actual?");
    if (verificaNombre && verificaApellido && verificaEdad)
    {
        alert("Bienvenido " + nombre + " " + apellido + " puede ingresar por la puerta 5");
    } else {
        alert("Usted es un impostor, adios");
    }
} else {
    alert("La contraseña es incorrecta, adios");
} */

/*

let inicio = 1;

inicio++;

console.log(inicio);

inicio--;

console.log(inicio);

// Estructura WHILE

// Estructura FOR

// FOR Continue
for (let i = 1; i <= 10; i++){

    if(i == 5){
        continue;
    }
    alert(i);
}

// FOR Break
for (let i = 1; i <= 10; i++){

    if(i == 5){
        break;
    }
    alert(i);
}

*/

/*

// DO WHILE

let passwordDefault = 16810;
let password = 0;
let count = 0;
let tries = 5;

let names = prompt("Ingresa tu nombre");
console.log(`El nombre que has ingresado es ${names}`);

do {

    password = prompt(`Ingresa la contraseña numérica`);
    count++;

    if (password != passwordDefault)
    {
        switch (count) {
            case 4:
                console.log("Último Intento");
                break;
            case 5:
                alert("TE QUEDASTE SIN INTENTOS");
                break;
            default:
                console.log(`La contraseña es incorrecta, intento ${count}`);
                break;
        }
    }   

} while ((count != tries) && (password != passwordDefault))

*/

/*

// FUNCIONES

function imprimirMensaje() {

    let nombre = "JULIAN";
    console.log(`${nombre} dentro de función`);

}

console.log(`${nombre} fuera de función`);

imprimirMensaje();

*/

/*

// FUNCIONES CON PARÁMETROS

function imprimirMensaje(nombre, apellido){
    console.log(`Valor 1 = ${nombre}, Valor 2 = ${apellido}`);
}

imprimirMensaje("Julian", "Fuoco");
imprimirMensaje("Ramón", "Perez");
imprimirMensaje("Juan", "Lopez");

*/

/*

function sumar(a,b){
    let resultado = a + b;
    return resultado;
}

function restar(a,b){
    let resultado = a - b;
    return resultado;
}

function multiplicar(a,b){
    let resultado = a * b;
    return resultado;
}

function dividir(a,b){
    let resultado = a / b;
    return resultado;
}

let num1 = Number(prompt(`Ingresa el valor uno`));
let num2 = Number(prompt(`Ingresa el valor dos`));

console.log(sumar(num1,num2));
console.log(restar(num1,num2));
console.log(multiplicar(num1,num2));
console.log(dividir(num1,num2));

*/

/*

let jamon = 80;

let cantidad = Number(prompt("¿Cuánto querés?"));


function datos(cant){
    console.log((cant/100) * jamon);
}

datos(cantidad);

*/

// DEFINICIÓN DE VARIABLES

var usuario = "";
var contrasenia = "";
var userLogged = false;
var opcionSeleccionada = 0;
let tries = 3;
let ETH = 0.15;
let BTC = 0.004;
let SHIB = 100000000;
let SUN = 1000;
let ADA = 2000;
let DOT = 3000;

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

function editarValor(nombre, valor){

}

function borrarValor(nombre){

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

