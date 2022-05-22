/*•Desarrolle un algoritmo que, de acuerdo a la
altura de una persona, decida si puede entrar a
un juego en un parque de diversiones
•Para poder subirse a la montaña rusa la
persona debe medir 1.30 mts. o más.*/

let persona: number = Number(prompt("Ingrese su altura"));

if (persona >= 1.3) {
  console.log("Usted SI puede Ingresar a la MONTAÑA RUSSA");
} else {
  console.log("Usted NO puede Ingresar a la MONTAÑA RUSSA");
}
