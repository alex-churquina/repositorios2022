/*Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es par
o impar
• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero)*/

let numeroIngresado: number = 0;
let numero: number;

while (numeroIngresado === 0) {
  numero = prompt("Ingrese un numero");
  if (numero % 2 === 0) {
    console.log("El numero Ingresado es par");
  } else {
    console.log("El numero Ingresado es Impar");
  }
  numeroIngresado = Number(prompt("Si desea continuar presione 0"));
}
