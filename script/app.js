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

    const monedas = [];

    const preciosURL = "../json/precios.json";

    let datoParseado;

    $.get(preciosURL, function (respuesta, estado) {
        if(estado === "success"){
            respuesta.forEach(e => {
                const moneda = new Moneda(e.Nombre, e.Precio, e.Descripcion);
                monedas.push(moneda);                  
            })
            // Convierto la información a texto plano para poder almacenarla en el localStorage
            datoParseado = JSON.stringify(monedas);
            // Cargo los valores en el localStorage
            localStorage.setItem("monedas", datoParseado); 
            
            // Nombre de las Columnas 

            var nombreColumnas = `<tr><th>#</th><th>Token</th><th>Precio</th><th>Descripción</th></tr>`;

            // Recupero información del localStorage

            let datoDelStorage = localStorage.getItem("monedas");
            let lasMonedas = JSON.parse(datoDelStorage);

            // Filas con la información

            var filasInformacion = "";

            for(let i=0; i<lasMonedas.length;i++)
            {
                filasInformacion = filasInformacion + `<tr>
                <td>${i+1}</td>
                <td>${lasMonedas[i].nombre}</td>
                <td>${lasMonedas[i].precio}</td>
                <td>${lasMonedas[i].desc}</td></tr>`;
            }

            // Obtengo el identificador del elemento tabla en el DOM

            let elementoTabla = document.getElementById("tabla");

            // Agrego a ese elemento las filas que he armado con la información

            elementoTabla.innerHTML = nombreColumnas + filasInformacion;
        }
    }); 
}

function formateaValor(valor)
{
    valor = parseFloat(valor).toFixed(2);
    var resultado = Number(valor).toLocaleString('es');
    return resultado;
}

// Procesos
inicial();

