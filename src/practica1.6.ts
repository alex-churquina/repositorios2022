/*Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo*/

let ingresarNumero: number;
let continuar: number = 1;
let numeroMayor: number = -99999;
let numeroMinimo: number = 99999;

while (continuar !== 0) {
  ingresarNumero = Number(prompt("Ingresar numero"));
  continuar = Number(prompt("Desea continuar"));
  if (ingresarNumero > numeroMayor) {
    numeroMayor = ingresarNumero;
  }
  if (ingresarNumero < numeroMinimo) {
    numeroMinimo = ingresarNumero;
  }
}
console.log("El numero mayor es: " + numeroMayor);
console.log("El numero menor es: " + numeroMinimo);
