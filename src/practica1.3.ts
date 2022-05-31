/*Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27*/

let primerNumero: number = Number(prompt("Ingrese primer numero"));
let segundoNumero: number = Number(prompt("Ingrese segundo numero"));
let resultado: number;
resultado = primerNumero + segundoNumero;

for (let indice: number = primerNumero; indice <= segundoNumero; indice++) {
  console.log(indice);
  resultado = primerNumero + segundoNumero;
}
console.log("Su resultado es: ", resultado);
