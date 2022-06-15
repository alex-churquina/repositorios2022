/*Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente
Sueldo Actual               Sueldo con Aumento
0 a 15.000                         20%
15.001 a 20.000                    10%
20.001 a 25.000                     5%
Mas de 25.000                 No hay aumento

• Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y se lo
muestre*/

let ingresarSueldo: number = Number(prompt("Ingrese el sueldo"));
let porcentajeAumentado: number = 0;
let sueldoConAumento: number = 0;

if (ingresarSueldo > 0 && ingresarSueldo <= 15000) {
  porcentajeAumentado = ingresarSueldo * 2;
  sueldoConAumento = ingresarSueldo + porcentajeAumentado;
  console.log("Usted cobra un Aumento del 20%: ", porcentajeAumentado);
  //console.log(porcentajeAumentado)
  console.log("Su sueldo a cobrar es: " + sueldoConAumento);
} else if (ingresarSueldo > 15000 && ingresarSueldo <= 20000) {
  porcentajeAumentado = ingresarSueldo * 1;
  sueldoConAumento = ingresarSueldo + porcentajeAumentado;
  console.log("Usted cobra un Aumento del 10%");
  console.log("Su sueldo a cobrar es: ", sueldoConAumento);
} else if (ingresarSueldo > 20000 && ingresarSueldo <= 25000) {
  porcentajeAumentado = ingresarSueldo * 0.5;
  sueldoConAumento = ingresarSueldo + porcentajeAumentado;
  console.log("Usted cobra un Aumento del 5%");
  console.log("Su sueldo a cobrar es: ", sueldoConAumento);
} else if (ingresarSueldo > 25000) {
  console.log("Usted no cobra ningun aumento");
}
