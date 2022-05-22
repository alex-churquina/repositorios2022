/*•Desarrolle un algoritmo que diga el precio de
una compra
• La compra se compone del precio del producto
y la cantidad
•Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10%*/

let precioDelProducto: number = Number(
  prompt("Ingrese el precio del producto")
);
let cantidadDeCompra: number = Number(
  prompt("Ingrese la cantidad de producto que compro")
);
let descuento: number = 0;
let precioTotal: number = 0;
let precioFinal: number = 0;

precioTotal = precioDelProducto * cantidadDeCompra;

if (precioTotal > 1000) {
  descuento = precioTotal * 0.1;
  precioFinal = precioTotal - descuento;
  console.log("El precio con descuento es el siguiente: ", precioFinal);
} else {
  console.log(
    "Su compra NO tiene descuento, El monto a pagaar es: ",
    precioTotal
  );
}
