// Numero aleatorio
function aleatorio(min, max) {
  const c = Math.random() * (max - min) + min;
  return Math.floor(c);
}

// Adivinar numero 0 a 100 (incluido)
function juego (){

var generado = Math.floor(Math.random() * 100) + 1;
var numAdivinar;
numAdivinar = prompt("Escribe un numero del 0 al 100:", "");

do {
  numAdivinar = prompt("Escribe un numero del 0 al 100:", "");
  if (generado == numAdivinar) {
    console.log("Exacto, el numero era el " + generado);
  } else if (generado > numAdivinar) {
    console.log("El numero a adivinar es mayor. Prueba de nuevo.");
  } else {
    console.log("El numero a adivinar es menor. Prueba de nuevo");
  }
} while (generado != numAdivinar);

}

// Array
function arreglo (){
let num1 = prompt("Escribe el primer numero: ", '');
let num2 = prompt("Escribe el primer numero: ", '');
let num3 = prompt("Escribe el primer numero: ", '');
var arreglo = Array(num1, num2, num3);
console.log(arreglo);
}

// Numeros primos
