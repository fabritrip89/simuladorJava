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

/*Incliuir condicionales e incluir ciclos

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

*/

/*

const paletas = [
  { id: 11235, paleta: "Pala NOX" },
  { id: 22512, paleta: "Pala Adidas Adipower" },
  { id: 3253, paleta: "Pala Varilon" },
];

for (const paleta of paletas) {
  console.log(paleta.id);
  console.log(paleta.paleta);
}

*/

/*  class paleta {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const paletas = [];
paletas.push(new paleta("Pala NOX", "125"));
paletas.push(new paleta("fideo", "70"));
paletas.push(new paleta("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const paleta of paletas)
paleta.sumaIva();  */

/* let array = [{},{},{}]

const top5Mejorespalas2022 = [{
  ranking:1,
  name: "Adidas Adipower 3.0",
  score: 9.8,
  type: "Eva Black",
  format: "Diamond",
  weight: 365/380,


},{
  ranking:2,
  name: "Nox React",
  score: 9.7,
  type: "Eva Black",
  format: "round",
  weight: 365/380,
},{
  ranking:2,
  name: "Varilon Avant",
  score: 9.5,
  type: "Foam",
  format: "tear",
  weight: 365/380,

}] */

//Clase de Paletas, con diferentes propiedades.
class Paletas {
  constructor(name, score, type, weight, playerType, cost) {
    this.name = name;
    this.score = score;
    this.type = type;
    this.weight = weight;
    this.playerType = playerType;
    this.cost = cost;
  
  }
  resumen() {
    alert(this.name+" tiene una puntuación mundial de: "+this.score+" pts. Un formato de "+this.type+", presenta un peso de:  "+this.weight+" gramos. Diseñada para jugadores "+this.playerType+ ", con un valor final de " +this.cost+ " Dólares. ")
    
  }
}

//Tipos de paletas con sus características.

const adidasAdipower = new Paletas ("AdidasAdipower", 9.5, "Lagrima", 365, "Profesionales",  100);
const noxReact = new Paletas ("NoxReact", 9.3, "Diamante", 370, "Avanzados", 89);
const varilonAvant = new Paletas ("VarilonAvant", 8.9, "Redonda", 372, "Profesionales", 95 );
