/*Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos.
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total*/

let numero: number;
let numerosPositivos: number = 0;
let numerosNegativos: number = 0;
let porcentaje: number = 0;
let contadorTotal: number = 0;
let continuar: number = 1;

while (continuar !== 0) {
  numero = Number(prompt("Ingrese cualquier numero + o -"));
  continuar = Number(prompt("¿Desea continuar?"));
  if (numero > 0) {
    numerosPositivos++;
  } else if (numero < 0) {
    numerosNegativos++;
  }
  contadorTotal++;
}
porcentaje = (numerosPositivos * 100) / contadorTotal;
console.log("Cantidad de numeros Ingresados: ", contadorTotal);
console.log("Porcentual de numeros positivos son: ", porcentaje + "%");
console.log("Cantidad de numeros Negativos Ingresados: ", numerosNegativos);
