/*
•Desarrolle un algoritmo que dados tres
números determine cuál es el mayor de los
tres*/

let numero1: number = Number(prompt("Ingrese primer numero"));
let numero2: number = Number(prompt("Ingrese segundo numero"));
let numero3: number = Number(prompt("Ingrese tercer numero"));

if (numero1 > numero2 && numero1 > numero3) {
  console.log("el numero", numero1, "es mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log("El numero", numero2, "es mayor");
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log("El numero", numero3, "es mayor");
}
