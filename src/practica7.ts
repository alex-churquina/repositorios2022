/*• Desarrolle un algoritmo que, dada una posición en
una carrera se determine el tipo de medalla a
entregar.
• Tenga en cuenta que para el primer puesto se
entrega medalla de oro, segundo puesto medalla
de plata y tercer puesto medalla de bronce. En
caso que quede en otra posición se entrega
certificado de participación*/

let posicionFinal: number = Number(prompt("Ingrese el puesto que salio"));
let medallaDeOro: number = 1;
let medallaDePlata: number = 2;
let medallaDeBronce: number = 3;

if (posicionFinal === 1) {
  console.log("Usted ha salido campeon: ", medallaDeOro);
} else if (posicionFinal === 2) {
  console.log("Usted salio Segundo: " + medallaDePlata);
} else if (posicionFinal === 3) {
  console.log("Usted salio tercero: " + medallaDeBronce);
}
console.log("Certificado de participacion");
