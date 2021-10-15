import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  pantalla: string;
  acumulado: number;
  op: string;
  resultado: boolean;

  constructor(private log : LoggerService) {
    this.pantalla = '0';
    this.acumulado = 0;
    this.op = '+';
    this.resultado = true;
  }

  ponerDigito(num: string) {
    if (this.pantalla == '0' || this.resultado) {
      this.pantalla = num;
      this.resultado = false;
    } else {
      this.pantalla += num;
    }
  }

  operar(operador: string) {
    let valor = parseFloat(this.pantalla);
    switch (this.op) {
      case '+':
        this.acumulado += valor;
        break;
      case '-':
        this.acumulado -= valor;
        break;
      case '*':
        this.acumulado *= valor;
        break;
      case '/':
        this.acumulado /= valor;
        break;
    }

    this.op = operador;
    this.resultado = true;
    this.pantalla = this.acumulado.toString();
  }

  borrarDigito() {
    if (
      this.resultado ||
      this.pantalla.length == 1 ||
      (this.pantalla.length == 2 && this.pantalla.startsWith('-'))
    ) {
      this.pantalla = '0';
      this.resultado = true;
    } else this.pantalla = this.pantalla.substr(0, this.pantalla.length - 1);
  }

  borrarTodo() {
    this.acumulado = 0;
    this.op = '+';
    this.pantalla = '0';
    this.resultado = true;
  }

  cambiarSigno() {
    this.pantalla = (-this.pantalla).toString();
    this.acumulado = -this.acumulado;
  }

  ponerComa() {
    if (this.resultado) {
      this.pantalla = '0.';
      this.resultado = false;
    } else {
      this.pantalla += '.';
    }
  }

  ngOnInit(): void {}
}
