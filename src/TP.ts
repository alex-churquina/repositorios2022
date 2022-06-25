/*Hacer un programa que simule la compra que hace un cliente en un
supermercado. El cliente va tener que ingresar por teclado la
CANTIDAD de productos que va a llevar, los PRODUCTOS que va
a comprar, el PRECIO UNITARIO de cada producto y la CANTIDAD
A COMPRAR DE CADA producto.
Finalizada la compra, el programa va a mostrar por pantalla el
detalle de la compra, productos, cantidad, precio unitario y precio
total.
Dependiendo del monto comprado, el cliente participa de un sorteo:
• si compra menos de 1000 no participa por nada
• si compra mas de 3000 participa por un 0km
• si compra mas de 2000 pero menos de 3000 participa por una
moto 0k
• si compra mas de 1000 pero menos de 2000 participa un tv led*/

function cargarProductos(arrayProducto: string[]): void {
  for (let indice: number = 0; indice < arrayProducto.length; indice++) {
    arrayProducto[indice] = prompt("ingrese producto" + indice);
  }
}

function cargarPrecioProducto(arrayPrecioProducto): void {
  for (let indice: number = 0; indice < arrayPrecioProducto.length; indice++) {
    let precio: number = Number(
      prompt(
        "Ingrese valor de Producto" + listaDeProductos[indice] + "que compro"
      )
    );
    while (precio <= 0) {
      precio = Number(
        prompt(
          "Ingrese valor de Producto" + listaDeProductos[indice] + "que compro"
        )
      );
    }
    arrayPrecioProducto[indice] = precio;
  }
}

function cargarCantidadDeProductos(arrayCantidadProductos: number[]): void {
  for (
    let indice: number = 0;
    indice < arrayCantidadProductos.length;
    indice++
  ) {
    let cantidad: number = Number(
      prompt("Ingrese cantidad de " + listaDeProductos[indice])
    );
    while (cantidad <= 0) {
      cantidad = Number(
        prompt("Ingrese cantidad de " + listaDeProductos[indice])
      );
    }
    arrayCantidadProductos[indice] = cantidad;
  }
}

function calcularPrecioTotal(
  arregloPrecio: number[],
  arregloNumeros: number[]
): number {
  let total: number = 0;
  for (let indice: number = 0; indice < arregloPrecio.length; indice++) {
    total =
      total + Number(arregloPrecio[indice]) * Number(arregloNumeros[indice]);
  }
  return total;
}

function mostrarDetalle(): void {
  console.log("El detalle de su compra es:");
  for (let indice: number = 0; indice < cantidadDeProductos; indice++) {
    console.log(
      numerosDeProductos[indice] +
        " unidades de" +
        listaDeProductos[indice] +
        " a un precio por unidad de" +
        precioDelProducto[indice] +
        "=" +
        precioDelProducto[indice] * numerosDeProductos[indice]
    );
  }
}

let cantidadDeProductos: number = Number(
  prompt("Ingrese cantidad de productos a comprar")
);
let listaDeProductos: string[] = new Array(cantidadDeProductos);
let precioDelProducto: number[] = new Array(cantidadDeProductos);
let numerosDeProductos: number[] = new Array(cantidadDeProductos);
let precioTotal: number = 0;

cargarProductos(listaDeProductos);
cargarPrecioProducto(precioDelProducto);
cargarCantidadDeProductos(numerosDeProductos);
precioTotal = calcularPrecioTotal(precioDelProducto, numerosDeProductos);

if (precioTotal < 1000) {
  mostrarDetalle();
  console.log("No participas por nada");
} else if (precioTotal >= 1000 && precioTotal < 2000) {
  mostrarDetalle();
  console.log("Participas por un tv");
} else if (precioTotal >= 3000) {
  mostrarDetalle();
  console.log("Participass por 0 km");
}
