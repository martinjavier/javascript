
function inicial()
{
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

    // console.log(misMonedas);

    // Convierto la información a texto plano para poder almacenarla en el localStorage

    let datoParseado = JSON.stringify(misMonedas);

    // console.log(datoParseado);

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

    // console.log(monedas);

    // Recupero información con la cantidad de las monedas en mi poder del localStorage

    datoDelStorage = localStorage.getItem("misMonedas");
    let misMonedas = JSON.parse(datoDelStorage);

    // console.log(misMonedas);

    // Título de la Página

    var tituloPagina = `<h1>Tu Billetera de Criptomonedas</h1>`;

    // Nombre de las Columnas 

    var nombreColumnas = `<tr><th>#</th><th>Token</th><th>Precio</th><th>Cantidad</th><th>Valores</th></tr>`;

    // Filas con la información

    var filasInformacion = "";
    var valorCalculado;

    for(let i=0; i<monedas.length;i++)
    {
        valorCalculado = (misMonedas[i].cantidad * monedas[i].precio)
        valorCalculado = formateaValor(valorCalculado);
        filasInformacion = filasInformacion + `<tr><td>${i+1}</td><td>${misMonedas[i].nombre}</td><td>${formateaValor(monedas[i].precio)}</td><td>${formateaValor(misMonedas[i].cantidad)}</td><td>${valorCalculado}</td></tr>`;
    }

    // Obtengo el identificador del elemento tabla en el DOM

    let elementoTabla = document.getElementById("tablaBilletera");

    // Agrego a ese elemento las firmas que he armado con la información

    elementoTabla.innerHTML = nombreColumnas + filasInformacion;
}

// Procesos
inicial();
muestroTabla();