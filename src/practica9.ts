/*• Escribir un algoritmo que nos pida
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

let clave: string;
let intentos: number = 0;
let continuar: boolean = true;

while (intentos < 3 && continuar === true) {
  clave = prompt("Ingrese clave");
  if (clave === "eureka") {
    console.log("Su clave es correcta");
    continuar = false;
  } else {
    console.log("Su clave es incorrecta");
  }
  intentos++;
}
if (continuar === true) {
  console.log("Acabaste los intentos");
}
