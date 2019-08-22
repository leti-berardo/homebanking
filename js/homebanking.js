//Declaración de variables

let nombreUsuario = 'Leticia Berardo';
let saldoCuenta = 10000;
let limiteExtraccion = 300;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    limiteExtraccion = parseInt(prompt('Ingresa el nuevo limite de extraccion:'));
    actualizarLimiteEnPantalla();
    alert('El nuevo limite de extraccion es $' + limiteExtraccion);

}

function extraerDinero() {
    let extraccion = prompt('Ingresa el monto que quieras extraer: ');
    console.log(extraccion);
    if(extraccion == null) {
        return;
    }
    extraccion = parseInt(extraccion);
    while((extraccion > limiteExtraccion) || (extraccion > saldoCuenta) || (extraccion%100 !== 0)) {
        let infoText = 'El monto supera el limite de extraccion, intenta nuevamente.';
        if (extraccion > saldoCuenta) {
            infoText = 'No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero, intenta nuevamente.';
        }
        else if (extraccion % 100 !== 0){
            infoText = 'El cajero solo entrega billetes de $100. Por favor ingrese un monto valido: '
        }
        extraccion = parseInt(prompt(infoText));
    }
    let saldoAnterior = saldoCuenta;
    let saldoActual = saldoCuenta -= extraccion;
    actualizarSaldoEnPantalla();
    alert('Has retirado: $' + extraccion + '\nSaldo Anterior: $' + saldoAnterior + '\nSaldo actual: $' + saldoActual);
    
}

function depositarDinero() {
    let deposito = parseInt(prompt('Ingresa el monto a depositar: '));
    let saldoAnterior = saldoCuenta;
    let saldoActual = saldoCuenta += deposito;
    actualizarSaldoEnPantalla();
    alert('Has depositado: $' + deposito + '\nSaldo Anterior: $' + saldoAnterior + '\nSaldo actual: $' + saldoActual);
    
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}