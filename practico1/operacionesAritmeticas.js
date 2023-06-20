let var1 = 6;
let var2 = 5;
let var3 = 11;
let var4 = 7;

let operSum= var1+var2;
let operRes= var3-var4;

let resultadoFinal=operSum*operRes;
let esPar = (resultadoFinal%2)===0;
console.log("Mis variables iniciales fueron: %i, %i, %i y %i. La respuesta a verificar si el resultado final es par es: %s", var1, var2, var3, var4, esPar);