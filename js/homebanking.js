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

}

function extraerDinero(extraccion) {
    saldoCuenta += extraccion;
}

function depositarDinero() {
    let deposito = parseInt(prompt('Ingresa el monto a depositar: '))
    let saldoAnterior = saldoCuenta;
    let saldoActual = saldoCuenta += deposito;
    alert('Has depositado: $' + deposito + '\nSaldo Anterior: $' + saldoAnterior + '\nSaldo actual: $' + saldoActual)
    actualizarSaldoEnPantalla();
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