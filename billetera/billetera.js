
function inicial()
{
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

    for(let i=0; i < monedas.length; i++)
    {
        localStorage.setItem("monedas", datoParseado);
    }

    // Creamos el arreglo para almacenar mis monedas

    const misMonedas = [];    

    // Creamos una clase

    class MiMoneda{

        constructor (nombre, cantidad){
            this.nombre = nombre
            this.cantidad = cantidad
        }
    }

    // Defino la cantidad de cada moneda que poseo

    const mimoneda01 = new MiMoneda("BTC", 0.50);
    const mimoneda02 = new MiMoneda("ETH", 5.00);
    const mimoneda03 = new MiMoneda("ADA", 300.00);
    const mimoneda04 = new MiMoneda("BNB", 43.50);
    const mimoneda05 = new MiMoneda("USDT", 100.00);
    const mimoneda06 = new MiMoneda("XRP", 350.00);
    const mimoneda07 = new MiMoneda("DOGE", 4500.00);
    const mimoneda08 = new MiMoneda("DOT", 35.22);
    const mimoneda09 = new MiMoneda("SHIB", 500000000.00);
    const mimoneda10 = new MiMoneda("SUN", 40000.00);

    // Agrego la información de mis monedas al arreglo

    misMonedas.push(mimoneda01);
    misMonedas.push(mimoneda02);
    misMonedas.push(mimoneda03);
    misMonedas.push(mimoneda04);
    misMonedas.push(mimoneda05);
    misMonedas.push(mimoneda06);
    misMonedas.push(mimoneda07);
    misMonedas.push(mimoneda08);
    misMonedas.push(mimoneda09);
    misMonedas.push(mimoneda10);

    // Convierto la información a texto plano para poder almacenarla en el localStorage

    datoParseado = JSON.stringify(misMonedas);

    console.log(datoParseado);

    // Cargamos los valores en el localStorage

    for(let i=0; i < misMonedas.length; i++)
    {
        localStorage.setItem("misMonedas", datoParseado);
    }
}

function muestroTabla()
{
    // Defino variables

    let datoDelStorage;

    // Defino métodos

    function formateaValor(valorA)
    {
        var resultado = Number(valorA).toLocaleString('en');
        return resultado;
    }

    // Recupero información con el precio de las monedas del localStorage

    datoDelStorage = localStorage.getItem("monedas");
    let monedas = JSON.parse(datoDelStorage);

    // Recupero información con la cantidad de las monedas en mi poder del localStorage

    datoDelStorage = localStorage.getItem("misMonedas");
    let misMonedas = JSON.parse(datoDelStorage);

    // Título de la Página

    var tituloPagina = `<h1>Tu Billetera de Criptomonedas</h1>`;

    // Nombre de las Columnas 

    var nombreColumnas = `<tr><th>#</th><th>Token</th><th>Precio</th><th>Cantidad</th><th>Valores</th><th>Borrar</th><th>Editar</th></tr>`;

    // Filas con la información

    var filasInformacion = "";
    var valorCalculado;
    var precio;
    var precioFormateado;

    for(let i=0 ; i < misMonedas.length ; i++)
    {
        valorCalculado = 0

        // Recorro Moendas para obtener el precio
        for(let j=0; j<monedas.length;j++)
        {
            if (monedas[j].nombre == misMonedas[i].nombre)
            {       
                console.log(("Moneda: " + monedas[j].nombre + " MisMonedas: " + misMonedas[i].nombre));         
                let cantidad = misMonedas[i].cantidad;
                precio = monedas[j].precio;
                valorCalculado = cantidad * precio;
            }
        }

        precioFormateado = formateaValor(valorCalculado);   

        filasInformacion = filasInformacion + `<tr><td>${i+1}</td><td>${misMonedas[i].nombre}</td><td>${precio}</td><td>${formateaValor(misMonedas[i].cantidad)}</td><td>${precioFormateado}</td><td><button id="'${misMonedas[i].nombre}'" onclick="deleteCoin('${misMonedas[i].nombre}')">X</button></td><td><button id="'${misMonedas[i].nombre}'" onclick="editCoin('${misMonedas[i].nombre}');">edit</button></td></tr>`;

    }

    // Obtengo el identificador del elemento tabla en el DOM

    let elementoTabla = document.getElementById("tablaBilletera");

    // Agrego a ese elemento las filas que he armado con la información

    elementoTabla.innerHTML = nombreColumnas + filasInformacion;

}

const deleteCoin = (id) => {

    let todasMisMonedas = JSON.parse(localStorage.getItem('misMonedas'));

    let todasMenosUna = JSON.parse(localStorage.getItem('misMonedas')).filter(misMonedas => misMonedas.nombre != id);

    localStorage.removeItem('misMonedas');

    localStorage.setItem('misMonedas', JSON.stringify(todasMenosUna));

    muestroTabla();
}

const editCoin = (id) => {

    let todasMisMonedas = JSON.parse(localStorage.getItem('misMonedas'));

    for(let i=0; i< todasMisMonedas.length; i++)
    {
        if (JSON.stringify(todasMisMonedas[i].nombre).replace(/"/g,"") == id){
            let nuevoValor = prompt("Ingrese una nueva cantidad para " + JSON.stringify(todasMisMonedas[i].nombre).replace(/"/g,""));
            todasMisMonedas[i].cantidad = nuevoValor;
        }
    }

    localStorage.removeItem('misMonedas');
    localStorage.setItem('misMonedas', JSON.stringify(todasMisMonedas));

    muestroTabla();

}

// Procesos
inicial();
muestroTabla();