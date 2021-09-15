
function inicial()
{
    // Limpio el localStorage
    localStorage.removeItem('mismonedas');

    localStorage.removeItem('miEfectivo');
    localStorage.setItem("miEfectivo", 52500.00);  

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

function formateaNumero(valor)
{
    var resultado = Number(valor);
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

// ********************************************
// En base a la cantidad de efectivo que tengo,
// me permite comprar una criptomoneda
// ********************************************
const comprarCoin = (id) =>{

    // Recupero del localStorage mis monedas
    let todasMisMonedas = JSON.parse(localStorage.getItem('mismonedas'));
    
    // Recupero cuando dispongo en mi billetera
    let totalDeEfectivo = JSON.parse(localStorage.getItem('miEfectivo'));

    for(let i=0; i< todasMisMonedas.length; i++)    
    {        
        nombreMoneda = JSON.stringify(todasMisMonedas[i].nombre).replace(/"/g,"");
        if (nombreMoneda == id){
            let precioMoneda = JSON.stringify(todasMisMonedas[i].precio);
            let cantidadAComprar = prompt("Ingrese cuanto " + nombreMoneda +  " quiere comprar");
            let totalNecesario = cantidadAComprar * precioMoneda;
            if (totalDeEfectivo >= totalNecesario)
            {
                let cantidad = JSON.stringify(todasMisMonedas[i].cantidad);
                cantidad = formateaNumero(cantidad);
                cantidad += formateaNumero(cantidadAComprar);                
                todasMisMonedas[i].cantidad = cantidad;
                totalDeEfectivo -= totalNecesario

                Swal.fire({
                    type:'success',
                    title:'Compra exitosa',
                    Text:'Operación realizada'
                  })

            } 
            else
            {
                alert("No dispone de suficiente efectivo para comprar " + cantidadAComprar + " " + nombreMoneda);
            }            
        }
    }

    // Almaceno los valores en el localStorage
    localStorage.setItem('mismonedas', JSON.stringify(todasMisMonedas));
    localStorage.setItem('miEfectivo', JSON.stringify(totalDeEfectivo));

    mostrarTabla();

}

// ********************************************
// Me permite vender una criptomoneda y volcar
// ese dinero en mi cantidad de efectivo
// ********************************************
const venderCoin = (id) =>{

    // Recupero del localStorage mis monedas
    let todasMisMonedas = JSON.parse(localStorage.getItem('mismonedas'));
    
    // Recupero cuando dispongo en mi billetera
    let totalDeEfectivo = JSON.parse(localStorage.getItem('miEfectivo'));

    for(let i=0; i< todasMisMonedas.length; i++)    
    {        
        nombreMoneda = JSON.stringify(todasMisMonedas[i].nombre).replace(/"/g,"");

        if (nombreMoneda == id){
            
            let precioMoneda = formateaNumero(JSON.stringify(todasMisMonedas[i].precio));
            let cantidadDisponible = formateaNumero(JSON.stringify(todasMisMonedas[i].cantidad));
            let cantidadAVender = prompt("Ingrese cuanto " + nombreMoneda +  " quiere vender");
            cantidadAVender = formateaNumero(cantidadAVender);
           
            if (cantidadAVender <= cantidadDisponible)
            {   
                // Calculo la nueva cantidad de esa criptomoneda
                cantidadDisponible -= cantidadAVender;                
                todasMisMonedas[i].cantidad = cantidadDisponible;
                // Calculo cuanto aumentó mi efectivo
                let efectivoRecibido = cantidadAVender * precioMoneda
                totalDeEfectivo += efectivoRecibido;

                Swal.fire({
                    type:'success',
                    title:'Venta exitosa',
                    Text:'Operación realizada'
                  })
            } 
            else
            {
                alert("No dispone de " + cantidadAVender + " " + nombreMoneda + " para venderlos.");
            }            
        }
    }

    // Almaceno los valores en el localStorage
    localStorage.setItem('mismonedas', JSON.stringify(todasMisMonedas));
    localStorage.setItem('miEfectivo', JSON.stringify(totalDeEfectivo));

    mostrarTabla();

}

// ****************************************************
// Hace un cálculo de cuanto equivale en dólares
// el valor total de las criptomonedas en mi portafolio
// ****************************************************
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
    var valorFormateado = formateaNumero(valorAcumulado);
    valorFormateado = valorFormateado.toFixed(2);

    monto.text(`Portafolio $ ${valorFormateado}`);

}

// ****************************************************
// Recupera del localStorage la cantidad de dinero
// líquido que dispongo para operar
// ****************************************************
function miEfectivo(){

    let datoDelStorage = localStorage.getItem("miEfectivo");
    let cantidadDeEfectivo = JSON.parse(datoDelStorage);
    let monto = $('#cantidadEfectivo');
    var valorFormateado = formateaNumero(cantidadDeEfectivo);
    monto.text(`Efectivo $ ${valorFormateado.toFixed(2)}`);

}

function mostrarTabla()
{
    // Recupero información con la cantidad de las monedas en mi poder del localStorage
    let datoDelStorage = localStorage.getItem("mismonedas");
    let monedas = JSON.parse(datoDelStorage); 

    // Título de la Página

    var tituloPagina = `<h1>Tu Billetera de Criptomonedas</h1>`;

    // Nombre de las Columnas 

    var nombreColumnas = `<tr><th>#</th><th>Token</th><th>Precio</th><th>Cantidad</th><th>Valores</th><th class="text-center">Comprar</th><th class="text-center">Vender</th></tr>`;

    // Filas con la información

    var filasInformacion = "";
    var valorCalculado = 0;
    var precio;
    var cantidad;
    var nombre;

    for(let i=0 ; i < monedas.length ; i++)
    {
        nombre = monedas[i].nombre; 
        precio = formateaNumero(monedas[i].precio);
        cantidad = formateaNumero(monedas[i].cantidad);
        valorCalculado = cantidad * precio;
        valorCalculado = valorCalculado.toFixed(2);
        
        filasInformacion = filasInformacion + `<tr><td>${i+1}</td>
        <td>${nombre}</td>

        <td>${(precio.toLocaleString('en'))}</td>
        <td>${(cantidad.toLocaleString('en'))}</td>
        <td>${(valorCalculado)}</td>       
        <td align="center">
          <button type="button" class="btn btn-success" id="'${nombre}'" onclick="comprarCoin('${nombre}');">
            $<span class="glyphicon glyphicon-usd"></span>
          </button>
        </td>
        <td align="center">
          <button type="button" class="btn btn-danger" id="'${nombre}'" onclick="venderCoin('${nombre}');">
          $<span class="glyphicon glyphicon-usd"></span>
          </button>
        </td>
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
    miEfectivo(); 
}

// Procesos
inicial();


