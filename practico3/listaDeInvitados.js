let personas = ["Jose","Maria","Juan","Andres","Lionel","Sofia","Leandro","Emilia"];
let rechazados=[];
let admitidos=[];
for (let i = 0; i < personas.length; i++) {
    if ((personas[i]==="Jose")||(personas[i]==="Sofia")) {
        rechazados.push(personas[i]);
    } else {
        admitidos.push(personas[i]);
    }
    
}
for (let i = 0; i < admitidos.length; i++) {
    if (i===0) {
        console.log("La lista de invitados admitidos es:");
    }
    console.log(admitidos[i]); 
}
for (let i = 0; i < rechazados.length; i++) {
    if (i===0) {
        console.log("La lista de invitados rechazados es:");
    }
    console.log(rechazados[i]); 
}
let ordenAdmitidos= admitidos.sort();
let ordenRechazados = rechazados.sort();
for (let i = 0; i < ordenAdmitidos.length; i++) {
    if (i===0) {
        console.log("La lista ordenada de invitados admitidos es:");
    }
    console.log(ordenAdmitidos[i]); 
}
for (let i = 0; i < ordenRechazados.length; i++) {
    if (i===0) {
        console.log("La lista ordenada de invitados rechazados es:");
    }
    console.log(ordenRechazados[i]); 
}