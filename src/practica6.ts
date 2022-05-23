/*• Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
• Considerar que tanto el usuario como la contraseña están
formados sólo por letras.
• El sistema deberá validar que el usuario y la contraseña
sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema
tiene registrado el usuario: Juan y la clave claveJuan*/

let usuario: string = "Juan";
let claveCorrecta: string = "claveJuan";
let usuario1: string = prompt("Ingerse su Usuario");
let clave: string = prompt("Ingrese su clacve");

if (usuario1 === usuario && clave === claveCorrecta) {
  console.log("Bienvenido");
} else {
  console.log("Usuario o clave ingresada es incorrecta");
}
