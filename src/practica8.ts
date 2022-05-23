/*
•Escriba un programa que solicite 10 números
al usuario y calcule el promedio de las mismas.
Luego, muestre el resultado por pantalla.*/

let promedio: number = 0;
let suma: number = 0;

for (let indice: number = 1; indice <= 10; indice++) {
  let notas: number = Number(prompt("Ingrese las notas"));
  suma = suma + notas;
  promedio = suma / 10;
}
console.log("Su nota promedio es: " + promedio);
