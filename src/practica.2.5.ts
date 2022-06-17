/*Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es par
o impar
• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero)*/

let numero: number; //= Number(prompt("Ingrese un numero"));

let continuar: number = 1;

while (continuar !== 0) {
  numero = Number(prompt("Ingrese un numero"));
  continuar = Number(prompt("Desea seguir ingresando numeros?"));
  if (numero % 2 === 0 || numero % 3 === 0) {
    console.log("El numero es PAR: ", numero);
  } else {
    console.log("El numero es IMPAR: ", numero);
  }
  // continuar = Number(prompt("Desea continuar"));
}
