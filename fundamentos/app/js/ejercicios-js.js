// Ejercicio 1
function aleatorio(min, max) {
  const c = Math.random() * (max - min) + min;
  return Math.floor(c);
}

// Ejercicio 2
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

// Ejercicio 3
function arreglo (num1, num2, num3){
num1 = prompt("Escribe el primer numero: ");
num2 = prompt("Escribe el segundo numero: ");
num3 = prompt("Escribe el tercer numero: ");
var arreglo = Array(num1, num2, num3);
return arreglo;
}

// Ejercicio 4
function primo(numero) {

    for (var i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return numero !== 1;
  }

  // Ejercicio 5
  function validarDni(dni) {
    var numero
    var letra1
    var letra
    var condicionDni
   
    condicionDni = /^\d{8}[a-zA-Z]$/;
   
    if(condicionDni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letra1 = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letra1.toUpperCase()) {
         alert('Dni erroneo, la letra del NIF no se corresponde');
       }else{
         alert('Dni correcto');
       }
    }else{
       alert('Dni erroneo, formato no válido');
     }
  }

  // Ejercicio 6
  function texto() {
    var palabra = prompt("Escribe una palabra").toLowerCase();

    palabra = palabra.replace(/ /g, "");

    for (var i = 0; i < palabra.length; i++) {
      if (palabra[i] != palabra[palabra.length - i - 1]) {
        return false;
      }
    }
    return true;
  }

  if (texto()) {
    alert("Esto es palíndromo");
  } else {
    alert("Esto no es palíndromo");
  }