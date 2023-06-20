let cita="Tres tristes tigres comen trigo en un trigal";
let substring="tigres comen trigo";
let tamanoDeCita=cita.length;
console.log("El tamaño de la cita es: "+tamanoDeCita);
let indice = cita.indexOf(substring);
console.log("El indice del substring es: %i",indice);
//let citaRevisada = cita.slice(0, cita.indexOf(" en"));
let citaRevisada = cita.slice(0,cita.indexOf("tigres"))+substring;
console.log(citaRevisada);