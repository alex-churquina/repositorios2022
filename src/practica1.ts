/*• El usuario debe ingresar la base y altura por teclado
• El área debe guardarse en una variable
• El resultado debe ser mostrado por pantalla*/

let base: number = Number(prompt("Ingrese la base"));
let altura: number = Number(prompt("Ingrese altura"));

let area: number;
let resultado: number;

area = base * altura;
resultado = area;
console.log("El area es: ", resultado);
