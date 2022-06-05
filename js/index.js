/*const asistente = function () {
    console.log("Hola en qué te puedo Ayudar?");
}

asistente()

*/

/*
const asistente = () => {
    console.log("Hola en qué te puedo Ayudar?");
}
asistente();


*/

/*Ejemplo Mostrar descuento

Producto Paleta de Padel
Precio $50.000
Cantidad 2
Descuento 15%  */

/*
prompt ("Ingrese su producto");
function calcularCarrito (precio){
let iva = 1.21;
let costoEnvio = 1000;
let precioTotal = (precio + iva) + costoEnvio;
return precioTotal

console.log("Precio Total");


}
*/

/*Incliuir condicionales e incluir ciclos*/

let pass = "";

while (pass != "si") {
  pass = prompt("Es mayor de Edad?");
  
  alert(" Está seguro ? Usted ha escrito: " + pass);
  
  console.log("Fin de Bucle");
 
}
let ingreseunNumero = prompt("Para confirmar ingrese un número mayor a 10");

if (ingreseunNumero >= 10) {
  alert("Bienvenido!!! Puedes comprar a esta página. ");
} else {
  alert(" Los sentimos. No puede comprar a esta página.");
}

for (let i = 0; i <= 10; i++) {
  let multi = ingreseunNumero * i;
   document.write(ingreseunNumero + " x " + i + " = " + multi + "<br>");
}

alert(ingreseunNumero + "x" + i + " = " + resultado );

function calcularEdad() {
  var edad = document.getElementById("edadNac").value;

  if (edad >= 18) {
    alert("Bienvenido!!! Puedes comprar a esta página. ");
  } else {
    alert(" Los sentimos. No puede comprar a esta página.");
  }
}
