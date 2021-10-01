function suma(a, b) {
  let rslt = a + b;
  return rslt;
}

function resta(a, b) {
  let rslt = a - b;
  return rslt;
}

function multiplicacion(a, b) {
  let rslt = a * b;
  return rslt;
}

function division(a, b) {
  let rslt = a / b;
  return rslt;
}

class Calculadora {
  //constructores
  constructor() {
    this.acumular = 0;
    this.op = "+";
    this.pantalla = "0";
    this.resultado = true;
  }

  ponerDigito(num) {
    if (this.pantalla == "0" || this.resultado) {
      this.pantalla = num;
      this.resultado = false;
    } else {
      this.pantalla += num;
    }
  }

  calcular(operador) {
    let valor = parseFloat(this.pantalla);
    switch (this.op) {
      case "+":
        this.acumular += valor;
        break;
      case "-":
        this.acumular -= valor;
        break;
      case "*":
        this.acumular *= valor;
        break;
      case "/":
        this.acumular /= valor;
        break;
    }

    this.op = operador;
    this.resultado = true;
    this.pantalla = this.acumular.toString();
  }

}
