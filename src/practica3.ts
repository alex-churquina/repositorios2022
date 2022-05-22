/*•En una prueba, un piloto tiene que completar 4
vueltas
•Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
•El programa debe retornar el tiempo total y el
promedio de vuelta*/

let vuelta1: number = Number(prompt("Tiempo de la primer Vuelta"));
let vuelta2: number = Number(prompt("Tiempo de la segunda Vuelta"));
let vuelta3: number = Number(prompt("Tiempo de la terceer Vuelta"));
let vuelta4: number = Number(prompt("Tiempo de la cuarta Vuelta"));

let tiempoTotal: number = 0;
let promedioDeVuelta: number = 0;

tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;

promedioDeVuelta = tiempoTotal / 4;

console.log(
  "El promedio de vuelta es el siguiente: ",
  promedioDeVuelta,
  "segundos"
);
