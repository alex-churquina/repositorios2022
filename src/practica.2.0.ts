/*•Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá
informarlo
•Tenga en cuenta que en JS hay
un operador denominado módulo (%)
que devuelve el resto de una división*/

let numero: number = Number(prompt("Ingrese numero"));

if (numero % 2 === 0) {
  console.log("es numero", numero, "par");
} else {
  console.log("es impar");
}
