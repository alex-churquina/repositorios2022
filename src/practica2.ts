/*•Implemente un algoritmo que calcule y muestre
por pantalla el precio final de un producto
después de aplicarle un descuento
• El precio inicial del producto es $450,50
• El descuento a aplicar es del 10%. Recuerde que
puede obtener el 10% de un valor multiplicado por 0,1
• El precio y el descuento deben ser guardados en
variables (no ingresados por teclado)*/

let precioDelProducto: number = 450.5;
let porcentaje: number = 0.1;
let descuento = precioDelProducto * porcentaje;

let precioFinal = 450.5 * 0.1;

console.log("Precio con descuento: ", precioFinal);
