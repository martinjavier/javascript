function inicial()
{
    // Limpio el localStorage
   localStorage.clear();

    // Creamos una clase
    class Moneda{

        constructor (nombre, precio, desc){
            this.nombre = nombre
            this.precio = precio
            this.desc = desc
        }
    }

    // Valores en U$D

    var BTC = 46907.68;
    var ETH = 3243.88;
    var ADA = 2.18;
    var BNB = 406.36;
    var USDT = 1.00;
    var XRP = 1.29;
    var DOGE = 0.29;
    var DOT = 22.71;
    var SHIB = 0.000008073;
    var SUN = 0.02988;

    // Armo un arreglo

    const monedas = [];

    // Defino la información de cada moneda

    const moneda01 = new Moneda("BTC", BTC, "Bitcoin");
    const moneda02 = new Moneda("ETH", ETH, "Ethereum");
    const moneda03 = new Moneda("ADA", ADA, "Cardano");
    const moneda04 = new Moneda("BNB", BNB, "Binance Coin");
    const moneda05 = new Moneda("USDT", USDT, "USDT");
    const moneda06 = new Moneda("XRP", XRP, "XRP");
    const moneda07 = new Moneda("DOGE", DOGE, "Doge Coin");
    const moneda08 = new Moneda("DOT", DOT, "Polkadot");
    const moneda09 = new Moneda("SHIB", SHIB, "Shiba Inu");
    const moneda10 = new Moneda("SUN", SUN, "Sun");

    // Agrego la información al arreglo

    monedas.push(moneda01);
    monedas.push(moneda02);
    monedas.push(moneda03);
    monedas.push(moneda04);
    monedas.push(moneda05);
    monedas.push(moneda06);
    monedas.push(moneda07);
    monedas.push(moneda08);
    monedas.push(moneda09);
    monedas.push(moneda10);

    console.log(monedas);

    // Convierto la información a texto plano para poder almacenarla en el localStorage

    let datoParseado = JSON.stringify(monedas);

    //console.log(datoParseado);

    // Cargamos los valores en el localStorage

    localStorage.setItem("monedas", datoParseado);

}

function muestroTabla()
{
    // Nombre de las Columnas 

    var nombreColumnas = `<tr><th>#</th><th>Token</th><th>Precio</th><th>Descripción</th></tr>`;

    // Recupero información del localStorage

    let datoDelStorage = localStorage.getItem("monedas");
    let monedas = JSON.parse(datoDelStorage);

    // Filas con la información

    var filasInformacion = "";

    for(let i=0; i<monedas.length;i++)
    {
        filasInformacion = filasInformacion + `<tr>
        <td>${i+1}</td>
        <td>${monedas[i].nombre}</td>
        <td>${monedas[i].precio}</td>
        <td>${monedas[i].desc}</td></tr>`;
    }

    // Obtengo el identificador del elemento tabla en el DOM

    let elementoTabla = document.getElementById("tabla");

    // Agrego a ese elemento las filas que he armado con la información

    elementoTabla.innerHTML = nombreColumnas + filasInformacion;
}

function formateaValor(valor)
{
    valor = parseFloat(valor).toFixed(2);
    var resultado = Number(valor).toLocaleString('es');
    return resultado;
}

// Procesos
inicial();
muestroTabla();