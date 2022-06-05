/*Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total*/

let numero: number;
let continuar: number = 1;
let numerosPositivos: number = 0;
let numerosNegativos: number = 0;
let totalNumeros: number = 0;
let promedio: number = 0;

while (continuar !== 0) {
  numero = Number(prompt("Ingrese un numero"));
  if (numero > 0) {
    numerosPositivos++;
  } else if (numero < 0) {
    numerosNegativos++;
  }
  totalNumeros++;
  continuar = Number(prompt("Desea continuar? presione 1"));
}
promedio = (numerosPositivos * 100) / totalNumeros;
console.log("Cantidad de numeros positivos: ", numerosPositivos);
console.log("Cantidad de numeros negativos ingresados: ", numerosNegativos);
console.log("El porcentaje de numeros positivos son: ", promedio, "%");
