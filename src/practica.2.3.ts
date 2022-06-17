/*Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es la
palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa*/

let clave: string = "0";
let contadorIntentos: number = 0;

while (clave !== "eureka" && contadorIntentos < 3) {
  clave = prompt("Ingrese la clave");
  if (clave === "eureka") {
    console.log("Su clave es correcta, Bienvenido");
  } else {
    console.log("Su clave es incorrecta");
    contadorIntentos++;
  }
}
console.log("FIN");
