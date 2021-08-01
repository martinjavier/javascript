// Solicita nombre y apellido del usuario

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
}
