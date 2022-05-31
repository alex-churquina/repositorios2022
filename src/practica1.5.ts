/*Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/

let numero: number = Number(prompt("Ingresar numero"));
let topeTabla: number = Number(prompt("Ingrese el tope de la tabla"));

for (let indice: number = 0; indice <= topeTabla; indice++) {
  console.log(numero + "x" + indice + "=" + numero * indice);
}
