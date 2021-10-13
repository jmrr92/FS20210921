import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
import { ContactosComponent } from '../contactos/componente.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Contactos', icono: 'fas fa-address-book', componente: ContactosComponent},
    { texto: 'Inicio', icono: 'fas fa-home', componente: HomeComponent },
    { texto: 'Formulario Clientes', icono: 'fas fa-users', componente: ClienteFormularioComponent},
    { texto: 'Formulario', icono: 'fab fa-wpforms', componente: FormularioComponent },
    { texto: 'Demos', icono: 'fas fa-flask', componente: DemosComponent },
    { texto: 'Calculadora', icono: 'fas fa-calculator', componente: CalculadoraComponent },
  ];

  actual = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}
