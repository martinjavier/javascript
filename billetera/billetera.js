function inicial()
{
    // Limpio el localStorage
    localStorage.removeItem('mismonedas');

    // Creamos una clase
    class MiMoneda{

        constructor (nombre, precio, descripcion, cantidad){
            this.nombre = nombre
            this.precio = precio
            this.descripcion = descripcion
            this.cantidad = cantidad
        }
    }

    // Creamos el arreglo para almacenar mis monedas
    const misMonedas = [];                     

    const misMonedasURL = "../json/tenencias.json";

    let datoParseado;

    $.get(misMonedasURL, function (respuesta, estado) {
        if(estado === "success"){
            respuesta.forEach(e => {
                console.log(e.Nombre, e.Precio, e.Descripcion, e.Cantidad);
                const moneda = new MiMoneda(e.Nombre, e.Precio, e.Descripcion, e.Cantidad);
                misMonedas.push(moneda);
            })
            // Convierto la información a texto plano para poder almacenarla en el localStorage
            datoParseado = JSON.stringify(misMonedas);    
            // Cargamos los valores en el localStorage
            localStorage.setItem("mismonedas", datoParseado);  
        }
        // Muestro la grilla con los datos
        mostrarTabla()
    });
}

function formateaValor(valor)
{
    valor = parseFloat(valor).toFixed(2);
    var resultado = Number(valor).toLocaleString('es');
    return resultado;
}

function deleteCoin(id){

    let todasMisMonedas = JSON.parse(localStorage.getItem('mismonedas'));

    let todasMenosUna = JSON.parse(localStorage.getItem('mismonedas')).filter(misMonedas => misMonedas.nombre != id);

    localStorage.removeItem('mismonedas');

    localStorage.setItem('mismonedas', JSON.stringify(todasMenosUna));

    mostrarTabla();
}

const editCoin = (id) =>{

    console.log("Moneda a editar: " + id);

    let todasMisMonedas = JSON.parse(localStorage.getItem('mismonedas'));

    var nombre;

    for(let i=0; i< todasMisMonedas.length; i++)    
    {        
        nombreMoneda = JSON.stringify(todasMisMonedas[i].nombre).replace(/"/g,"");
        if (nombreMoneda == id){
            let nuevoValor = prompt("Ingrese una nueva cantidad para " + nombreMoneda);
            todasMisMonedas[i].cantidad = nuevoValor;
        }
    }

    localStorage.removeItem('mismonedas');
    localStorage.setItem('mismonedas', JSON.stringify(todasMisMonedas));

    mostrarTabla();

}

function calculoTotal(){

    let valorAcumulado = 0;

    let datoDelStorage = localStorage.getItem("mismonedas");
    let misMonedas = JSON.parse(datoDelStorage);

    let valorCalculado = 0;

    for(let i=0 ; i < misMonedas.length ; i++)
    {  
        let cantidad = misMonedas[i].cantidad;
        precio = misMonedas[i].precio;
        valorCalculado = cantidad * precio;
        valorAcumulado += valorCalculado;  
    }

    let monto = $('#montoTotal');
    var valorFormateado = formateaValor(valorAcumulado);
    monto.text(`Total $ ${valorFormateado}`);

}

function mostrarTabla()
{
    // Recupero información con la cantidad de las monedas en mi poder del localStorage
    let datoDelStorage = localStorage.getItem("mismonedas");
    let monedas = JSON.parse(datoDelStorage); 

    // Título de la Página

    var tituloPagina = `<h1>Tu Billetera de Criptomonedas</h1>`;

    // Nombre de las Columnas 

    var nombreColumnas = `<tr><th>#</th><th>Token</th><th>Precio</th><th>Cantidad</th><th>Valores</th><th class="text-center">Borrar</th><th class="text-center">Editar Cantidad</th></tr>`;

    // Filas con la información

    var filasInformacion = "";
    var valorCalculado = 0;
    var precio;
    var cantidad;
    var nombre;

    for(let i=0 ; i < monedas.length ; i++)
    {
        nombre = monedas[i].nombre;     
        precio = monedas[i].precio;
        cantidad = monedas[i].cantidad;                    
        valorCalculado = cantidad * precio;

        filasInformacion = filasInformacion + `<tr><td>${i+1}</td>
        <td>${nombre}</td>
        <td>${formateaValor(precio)}</td>
        <td>${formateaValor(cantidad)}</td>
        <td>${formateaValor(valorCalculado)}</td>        
        <td align="center"><button id="'${nombre}'" onclick="deleteCoin('${nombre}')" type="button" class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path></svg>
        </button></td>
        <td align="center"><button type="button" class="btn btn-lg btn-primary" id="'${nombre}'" onclick="editCoin('${nombre}');">Editar</button></td>
        </tr>`;
    }

    // Obtengo el identificador del elemento tabla en el DOM

    let elementoTabla = document.getElementById("tablaBilletera");

    // Agrego a ese elemento las filas que he armado con la información
    elementoTabla.innerHTML = nombreColumnas + filasInformacion;

    // Asocio el botón de Reset

    let resetButton = $('#resetButton');

    // Capturo el método Click del botón y borro el localStorage

    resetButton.on("click", () => {

        // Borro misMonedas del localStorage
        localStorage.removeItem("mismonedas");
        inicial();
    })

    calculoTotal();    
}

// Procesos
inicial();


