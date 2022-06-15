/*•Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras
•Desarrolle un algoritmo que dada una compra:
precio unitario y cantidad el mes indicados por
el usuario, determine si el cliente tiene
descuento o no*/

let mes: string = prompt("Ingrese mes");
let compra: number = Number(prompt("Ingrese el monto"));
let descuento: number = 0;
let porcentaje: number = 1.5;
let compraFinal: number = 0;

if (mes === "octubre") {
  console.log("Gracias por comprar en nuestro cumpleaños");
  console.log("A ganado un descuento del 15% en su compra");
  descuento = porcentaje * compra;
  compraFinal = descuento - compra;
  console.log("Su compra es de", compra, "con un descuento de: ", descuento);
  console.log("Usted debe abonar un total de: ", compraFinal);
} else {
  console.log("A usted no le corresponde ningun descuento por su compra");
}
