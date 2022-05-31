let primerNumero: number = Number(prompt("Ingrese primer numero"));
let segundoNumero: number = Number(prompt("Ingrese segundo numero"));
let resultado: number;
resultado = segundoNumero + primerNumero;

for (let indice: number = primerNumero; indice >= segundoNumero; indice--) {
  console.log(indice);
  resultado = segundoNumero + primerNumero;
}
console.log("Su resultado es: ", resultado);
