/*•Desarrolle un algoritmo que diga el precio de
una compra
• La compra se compone del precio del producto
y la cantidad
•Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10%*/

let continuar: number = 1;
let comprasDelDia: number;
let porcentajeDescuento: number = 0.1;
let descuento: number = 0;
let compraFinal: number = 0;

while(continuar !== 0){
  comprasDelDia = Number(prompt("Ingrese la compra realizada"));
  if(comprasDelDia > 1000){
    console.log("Su compra le correspode un 10% de descuento");
    descuento = porcentajeDescuento * comprasDelDia;
    compraFinal = comprasDelDia - descuento;
    console.log("Su compra final con descuento es: " + compraFinal)
  }else if(comprasDelDia < 1000){
    console.log("Su compra es inferior a 1000");
    console.log("Para obtener dicho descuento debe superar los 1000");
  }
  continuar = Number(prompt("Desea seguir ingresando compras"));
}
console.log("Gracias por visitarnos, Vuelva pronto");
