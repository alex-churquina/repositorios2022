/*
•Realice una calculadora que suma o resta
según el pedido del usuario.
• El usuario deberá ingresar 2 números por teclado
• Luego ingresará una opción:
• Si ingresa 1 los números se sumaran
• Si ingresa 2 los números se restaran
• Si ingresa cualquier otra tecla termina el programa
• Para informar el resultado de la operación debe usar el
siguiente formato (40 ‘-’):*/



let numero1:number = Number(prompt("Ingrese primer numero"));
let numero2:number = Number(prompt("Ingrese segundo numero"));
let opcion:number = Number(prompt("Ingrese la opcion 1 suma y 2 resta"));
let condicion: boolean;
let resta:number = 0;
let suma:number = 0;

if(opcion === 1){
condicion = true
}else if(opcion === 2){
  condicion = false
}


switch condicion {
  case true:
  suma = numero1 + numero2;
  console.log("La suma de ambos numeros es: ",suma);
  break;

  case false:
  resta = numero1 - numero2;
  console.log("La resta de ambos numeros es: ",resta);
  break;

  default;

}
  