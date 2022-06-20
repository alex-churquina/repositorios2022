
/*•Realice una calculadora que suma o resta
según el pedido del usuario.
• El usuario deberá ingresar 2 números por teclado
• Luego ingresará una opción:
• Si ingresa 1 los números se sumaran
• Si ingresa 2 los números se restaran
• Si ingresa cualquier otra tecla termina el programa
• Para informar el resultado de la operación debe usar el
siguiente formato (40 ‘-’):*/


function dibujarLineas(){
  let linea:string = "-";
  for(let indice:number=0;indice<=40;indice++){
  linea = linea + "-";
  }
  console.log(linea);
}


let numero1:number = Number(prompt("Ingrese primer numero"));
let numero2:number = Number(prompt("Ingrese segundo numero"));
let opcion:number = Number(prompt("Opcion 1 sumar, Opcion 2 restar, Opcion 3 dividir, Opcion 4 multiplicar"));
let calculadora:number;
let resultado:number = 0;


if(opcion === 1){
  calculadora = 1;
}else if(opcion === 2){
  calculadora = 2;
}else if(opcion === 3){
  calculadora = 3;
}else if(opcion === 4){
  calculadora = 4;
}else{
  console.log("Opcion Invalida")
}

switch calculadora {
  case 1:
    resultado = numero1 + numero2
    dibujarLineas();
    console.log("El resultado de la operación es: ",resultado);
    dibujarLineas();
    break;
  case 2:
    resultado = numero1 - numero2;
    dibujarLineas();
    console.log("El resultado de la operación es: ",resultado);
    dibujarLineas();
    break;
  case 3:
    resultado = numero1 / numero2;
    dibujarLineas();
    console.log("El resultado de la operación es: ",resultado);
    dibujarLineas();
    break;
  case 4:
    resultado = numero1 * numero2;
    dibujarLineas();
    console.log("El resultado de la operación es: ",resultado);
    dibujarLineas();
    break;  
    
    default:
}





