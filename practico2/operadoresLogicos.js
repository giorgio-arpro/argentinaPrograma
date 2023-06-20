const readlineSync = require('readline-sync');
const numEntero = readlineSync.question("Por favor, ingrese un numero entero: ");
let num = Number(numEntero);
if ((num>0)&&((num%2)===0)) {
    console.log("El numero es positivo y par");
} else if ((num>0)&&((num%2)!==0)) {
    console.log("El numero es positivo e inpar");
} else if (num<0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}