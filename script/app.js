
// VARIABLES

var nombre = "Julian Matías";
var apellido = "Fuoco";

console.log(nombre);

// STRING

var lista = ["Julian",'Matías',`Fuoco`];

console.log(lista);

// NUMBER

let edad = 30;
console.log(edad);

// BOOLEAN

const casaPropia = false;
console.log(casaPropia);

// OPERADORES

let numero1 = 20;
let numero2 = 10;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multi = numero1 * numero2;
let divi = numero1 / numero2;

console.log(suma);
console.log(resta);
console.log(multi);
console.log(divi);

// CONCATENAR

console.log(nombre + " " + apellido);

// CONVERTIR 

// NULOS

// UNDEFINED



let numero1 = Number(prompt("Ingrese el primer número"));
let numero2 = Number(prompt("Ingrese el segundo número"));

console.log("SUMA: " + (numero1 + numero2));
console.log("RESTA: " + (numero1 - numero2));
console.log("MULTIPLICACIÓN: " + (numero1 * numero2));
console.log("DIVISIÓN: " + (numero1 / numero2));

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

console.log("Nombre Completo: " + nombre + " " + apellido);


// CONDICIONALES

let test = "SENTENCIA DEL IF";
let test2 = "SNETENCIA DEL ELSE";

let condicion = confirm("¿Qué condición querés?");

if (condicion) {
    console.log(test);
} else {
    console.log(test2);
}



let nombre = prompt("Ingresa tu nombre");
let confirmacion = confirm("¿Quieres entrar?");

if (nombre == "Julian" || nombre == "julian")
{
    console.log("Tu nombre es Julian");
} else {
    console.log("Tu nombre no es Julian.");
}

if (confirmacion)
{
    console.log("Y Quieres Ingresar");
} else {
    console.log("Y No Quieres Ingresar");
}

*/

// Pedir cuatro datos
// Nombre, Contraseña, Año Nacimiento y Año Actual

// Comparamos si la contraseña es "coderhouse"
// Tengo que mostrar en Alert mi edad actual y mostrar "Julian tenes 4 años"
// Sino, digo que la contraseña es incorrecta

let nombre = prompt("¿Cuál es tu nombre?");
let clave = prompt("Ingresa la contraseña");
clave = clave.toLowerCase();

if (clave == "coderhouse")
{
    let anioNac = Number(prompt("Ingresa tu año de nacimiento"));
    let anioActual = Number(prompt("Ingresa el año actual"));
    alert(nombre + " tenés " + (anioActual - anioNac) + " años");
} else {
    alert("La contraseña es incorrecta");
}
