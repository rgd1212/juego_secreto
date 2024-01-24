// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del número secreto';

/* variables */
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 2;

/* funciones */
function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function intentoDeUsuario() {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
        if(numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            // el usuario no acerto
            if(numeroSecreto>numeroDeUsuario){
                asignarTextoElemento('p','el numero es mayor');
            }else{
                asignarTextoElemento('p','el numero es menor');
            }
            intentos++;
            limpiarCaja();
        }
    return;
}

function condicionesIniciales(params) {
    asignarTextoElemento("h1", "Juego del Numero Secreto!!!");
    asignarTextoElemento("p", "Indica el numero del 1 al 10");
    numeroSecreto = generaNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar la caja
    limpiarCaja();
    // reiniciar mensaje de intervalo
    // generar numero aleatorio
    // inicializar numero de intentos
    condicionesIniciales();
    // deshabilitar boton de nuevo juego
    // document.querySelector('#reiniciar').setAttribute('disabled',true);
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function limpiarCaja(){
    document.querySelector('#valorDeUsuario').value='';
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generaNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

/* reutilizando funciones asignartextoelemento */
condicionesIniciales();
