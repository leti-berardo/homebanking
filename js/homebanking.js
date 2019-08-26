/*jshint esversion: 6 */
//Declaración de variables

let nombreUsuario = 'Leticia Berardo';
let saldoCuenta = 2000;
let limiteExtraccion = 300;

iniciarSesion();

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
};


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    limiteExtraccion = parseInt(prompt('Ingresa el nuevo limite de extraccion:'));

    actualizarLimiteEnPantalla();
    alert('El nuevo limite de extraccion es $' + limiteExtraccion);

}

function extraerDinero() {
    let infoText = false;
    let extraccion = prompt('Ingresa el monto que quieras extraer: ');
     // Hago el ParseInt despues para poder obtener el valor null en caso de que el usuario apriete cancelar.
    if (esUnNumero(parseInt(extraccion))) {
        extraccion = parseInt(extraccion);
        if (extraccion > limiteExtraccion) {
            infoText = 'El monto supera el limite de extraccion, intenta nuevamente.';
            alert(infoText);
        }
        else if (extraccion > saldoCuenta) {
            infoText = 'No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero, intenta nuevamente.';
            alert(infoText);
        }
        else if (extraccion % 100 !== 0) {
            infoText = 'El cajero solo entrega billetes de $100. Por favor ingrese un monto valido: ';
            alert(infoText);
        }
        else {
            let saldoAnterior = saldoCuenta;
            let saldoActual = saldoCuenta -= extraccion;
            actualizarSaldoEnPantalla();
            alert('Has retirado: $' + extraccion + '\nSaldo Anterior: $' + saldoAnterior + '\nSaldo actual: $' + saldoActual);
        }
    }
    else if (extraccion == null) {
        return;
    }
    else {
        alert('El valor ingresado no es valido');
        return;
    }
}

function depositarDinero() {
    let deposito = prompt('Ingresa el monto a depositar: ');
    // Hago el ParseInt despues para poder obtener el valor null en caso de que el usuario apriete cancelar.
    if (esUnNumero(parseInt(deposito))) {
        deposito = parseInt(deposito);
        let saldoAnterior = saldoCuenta;
        let saldoActual = saldoCuenta += deposito;
        actualizarSaldoEnPantalla();
        alert('Has depositado: $' + deposito + '\nSaldo Anterior: $' + saldoAnterior + '\nSaldo actual: $' + saldoActual);
    }
    else if (deposito == null) {
        return;
    }
    else {
        alert('El valor ingresado no es valido');
        return;
    }
}

function pagarServicio() {
    let agua = 350;
    let telefono = 425;
    let luz = 210;
    let internet = 570;
    let servicioAPagar = prompt('Ingrese el numero que corresponda con el servicio que quieres pagar \n1- Agua \n2- Luz \n3- Internet \n4- Telefono');
    switch (servicioAPagar) {
        case '1': servicioAPagar = agua;
            break;
        case '2': servicioAPagar = telefono;
            break;
        case '3': servicioAPagar = luz;
            break;
        case '4': servicioAPagar = internet;
            break;
        case null: servicioAPagar = false;
            break;
        default: alert('El codigo no corresponde a un servicio habilitado.'); servicioAPagar = false;
            break;
    }
    if (servicioAPagar) {
        let dineroDisponible = saldoSuficiente(servicioAPagar);
        if (dineroDisponible) {
            saldoCuenta -= servicioAPagar;
            alert('El servicio ha sido abonado con exito. Se debitaron de su cuenta $' + servicioAPagar);
            actualizarSaldoEnPantalla();
        }
    }
}

function transferirDinero() {
    let cuentaAmiga1 = 1234567;
    let cuentaAmiga2 = 7654321;
    let montoATransfeir = prompt('Ingrese el monto que desea transferir.');
    if (esUnNumero(parseInt(montoATransfeir))) {
        montoATransfeir = parseInt(montoATransfeir);
        if (saldoSuficiente(montoATransfeir)) {
            let cuentaATransferir = parseInt(prompt('Ingrese el Numero de la cuenta a la que desea transferirle dinero.'));
            if (esUnNumero(cuentaATransferir)) {
                if ((cuentaATransferir == cuentaAmiga1) || (cuentaATransferir == cuentaAmiga2)) {
                    let saldoAnterior = saldoCuenta;
                    let saldoActual = saldoCuenta -= montoATransfeir;
                    actualizarSaldoEnPantalla();
                    alert('Has realizado una transferencia por $' + montoATransfeir + '\nCuenta amiga numero: '+ cuentaATransferir + '\nSaldo Anterior: $' + saldoAnterior + '\nSaldo actual: $' + saldoActual);
                }
                else {
                    alert('El codigo que ingresaste no corresponde a ninguna Cuenta Amiga.');
                }
            }

        }
    }
    else if (montoATransfeir == null) {
        return;
    }
    else {
        alert('El valor ingresado no es valido');
        return;
    }
}


function iniciarSesion() {
    let codigoSeguridad = 1234;
    let codigoUsuario = prompt('Ingrese el codigo de acceso para la cuenta de ' + nombreUsuario );
    if (codigoUsuario == codigoSeguridad){
        alert('Bienvenidx ' + nombreUsuario + '. Ya puedes comenzar a realizar operaciones.');
    }
    else {
        alert('El codigo ingresado es incorrecto. El dinero sera retenido por cuestiones de seguridad.');
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
    }

}

function saldoSuficiente(data) {
    if (data > saldoCuenta) {
        alert('El saldo de la cuenta es insuficiente para realizar esta operacion.');
        return false;
    }
    return true;
}

function esUnNumero(data) {
    if (isNaN(data)) {
        return false;
    }
    return true;
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