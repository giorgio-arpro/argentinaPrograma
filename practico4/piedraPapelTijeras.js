//Funciones
function obtenerJugadaComputadora() {//Punto 2
    return Math.floor(Math.random() * 3);//número aleatorio entre el 0 y 2
}

function obtenerJugadaUsuario() {//Punto 3
    let usuario=0;
    console.log("--------------------------------------------");
    console.log("piedra, papel o tijeras,")
    const readlineSync = require('readline-sync');
    const elija = readlineSync.question("escriba para jugar: ");
    if ((elija==="piedra")) {
        usuario=0;
    } else if (elija==="papel") {
        usuario=1;
    } else if (elija==="tijeras") {
        usuario=2;
    } else {
        usuario=3;//en caso de error al escribir
    }
    return usuario;
}

function determinarGanador(compu,jugador) {//Punto 4
    let ganador;
    if (((compu===0)&&(jugador===2))||((compu===1)&&(jugador===0))||((compu===2)&&(jugador===1))) {
            console.log("El resultado fué: Gana la computadora.");
            console.log("Punto para la computadora!");
            ganador="computadora";
        } else if ((compu===jugador)) {
            console.log("El resultado fué: empate.");
            console.log("no hay puntos.");
        } else {
            console.log("El resultado fué: Gana el usuario.");
            console.log("Punto para el Usuario!");
            ganador="jugador";
        }
    return ganador;
}

//Programa
let palos=["Piedra","Papel","Tijeras"];
console.log("Bienvenido!!! vamos a jugar! A cuántas jugadas te enfrentaras?");
const readlineSync = require('readline-sync');
const jugadas = readlineSync.question("Gana el mejor de: ");//Extra 2
if (jugadas>0){//controla que la cantidad de jugadas sea válida
    //variables
    let error=false;//controlador de error al escribir después de 3 intentos
    let compu=0;
    let jugador=0;
    let resultado=0;
    let puntosCompu=0;
    let puntosJugador=0;
    //----------------------
    for (i=jugadas;i>0;i--) {
        compu=obtenerJugadaComputadora();//llamado a la funcion. Punto 5.a
        jugador=obtenerJugadaUsuario();//llamado a la funcion.Punto 5.b
        //controla que el usuario escriba correctamente piedra, papel o tijera y como máximo 3 intentos
        let cont=0;
        while ((cont<2)&&(jugador>2)) {
            console.log("Error al escribir, intente nuevamente!");
            jugador=obtenerJugadaUsuario();//llama nuevamente a la funcion para que escriba correctamente
            cont+=1;
        }
        if (jugador>2) {
            console.log("Exedió la cantidad de errores permitidos, vuelva a iniciar el juego.");
            error=true;
            break;
        }
        //--------------------
        resultado=determinarGanador(compu,jugador);//llamado a la funcion que resuelve quién gana la jugada. Punto 5.c
        console.log("*"); //Punto 6
        console.log(`La computadora eligio: ${palos[compu]}. El usuario eligio: ${palos[jugador]}.`);//imprime lo que elijió cada uno
        if (resultado==="computadora") {
            puntosCompu+=1;
        } else if (resultado==="jugador"){
            puntosJugador+=1;
        }
    }
    if (error===false){
        //anuncia quién es el ganador de TODAS las jugadas, según el puntaje acumulado
        if (puntosCompu>puntosJugador) {
            console.log("--------------------------------------------");
            console.log("Ganador final: la computadora!!!");
            console.log(`Puntos totales: Compu ${puntosCompu}, Jugador ${puntosJugador}.`);
        }else if (puntosJugador>puntosCompu) {
            console.log("--------------------------------------------");
            console.log("Ganador final: el usuario!!!");
            console.log(`Puntos totales: Compu ${puntosCompu}, Jugador ${puntosJugador}.`);
        } else {
            console.log("--------------------------------------------");
            console.log("Ganador final: hubo empate!!!");
            console.log(`Puntos totales: Compu ${puntosCompu}, Jugador ${puntosJugador}.`);
        }
    }
} else {
    console.log("Ingrese un número de jugada válido, vuelva a iniciar el juego.");
}