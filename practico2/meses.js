const readlineSync = require('readline-sync');
const mesIngreso = readlineSync.question("Por favor, ingrese un numero entero del 1 al 12: ");
let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
let cantidadDeDias = [31,28,31,30,31,30,31,31,30,31,30,31];
let mes=mesIngreso-1;
if ((mesIngreso>="1")&&(mesIngreso<="12")) {
    if ((mesIngreso==="4")||(mesIngreso==="6")||(mesIngreso==="9")||(mesIngreso==="11")) {
        console.log("La cantidad de dias del mes de %s es %i",meses[mes],cantidadDeDias[mes]);
    } else if (mesIngreso==="2") {
        console.log("La cantidad de dias del mes de %s es %i",meses[mes],cantidadDeDias[mes]);
    } else {
        console.log("La cantidad de dias del mes de %s es %i",meses[mes],cantidadDeDias[mes]);
    }
} else {
    console.log("El número ingresado es incorrecto!");
}