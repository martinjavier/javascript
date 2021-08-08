// Definición de variables

// Valores en U$D
var ETH = 2987.01;
var BTC = 43787.01;
var SHIB = 0.000007442;
var SUN = 0.02397;
var ADA = 1.43;
var DOT = 19.56;

// Tenencias
var cantETH = 2.5;
var cantBTC = 1.5;
var cantSHIB = 30000.0;
var cantSUN = 5000.0;
var cantADA = 50.0;
var cantDOT = 30.0;

// Arreglos
var nombreToken = ["ETH", "BTC", "SHIB", "SUN", "ADA", "DOT"];
var valorToken = [ETH, BTC, SHIB, SUN, ADA, DOT];
var descToken = ["Ethereum", "Bitcoin", "Shiba Inu", "Sun", "Cardano", "Polkadot"]
var cantToken = [cantETH, cantBTC, cantSHIB, cantSUN, cantADA, cantDOT];

// Acumulador
var montoTotal = 0.0;

// Título de la Página

var tituloPagina = `<h1>Tu Billetera de Criptomonedas</h1>`;

// Nombre de usuario

var nombreUsuario = `<h2>Usuario: gregorio2020</h2>`;

// Nombre de las Columnas 

var nombreColumnas = `<tr><th>#</th><th>Token</th><th>Valor</th><th>Descripción</th><th>Cantidad</th><th>Monto</th></tr>`;

// Filas con la información

var filasInformacion = "";

// Definición de Funciones

function calcularValor(valorA, valorB)
{
    var resultado = (valorA*valorB).toFixed(2)
    montoTotal = montoTotal + Number(resultado);
    return resultado;
}

function formateaValor(valorA)
{
    var resultado = Number(valorA).toLocaleString('en');
    return resultado;
}

// Arma la Información para la tabla

for (var index = 0; index < nombreToken.length; index++)
{    
    filasInformacion = filasInformacion + `<tr><td>${index}</td><td>${nombreToken[index]}</td><td>${valorToken[index]}</td><td>${descToken[index]}</td><td>${cantToken[index]}</td><td>${calcularValor(cantToken[index], valorToken[index])}</td></tr>`;
}

filasInformacion = filasInformacion + `<tr><td></td><td></td><td></td><td></td><td>TOTAL</td><td>${formateaValor(montoTotal)}</td></tr>`;

// Muestra en el navegador los datos calculados

document.open();
document.write(tituloPagina + nombreUsuario + "<table>" + nombreColumnas + filasInformacion + "</table>");
document.close();