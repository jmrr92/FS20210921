import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';


export interface Cliente{
  id: number | null;
  name: string;
  lName: string;
  email: string | null;
  address: string | null;
  active: boolean |null;
  date: Date | null;

}

@Injectable({ providedIn: 'root' })
export class ClienteFormularioViewModel {
  listado: Array<Cliente> = [
    {id: 1, name: 'pepito', lName: 'grillo', email: 'pepito@grillo', address: 'la calle', active: true, date: null},
  ];
  Elemento: Cliente = {id: null, name: '', lName: '', email: null, address: '', active: null, date: null};
  IsAdd = true;

  constructor(private notify: NotificationService) {}

  // public list() {}

  // public add() {
  //   this.Elemento = {id: null, name: '', lName: '', email: null, address: '', active: null, date: null};
  // }

  // public edit() {
  //   this.Elemento = this.listado[0];
  //   this.IsAdd = false;
  // }

  // public view() {
  //   this.Elemento = this.listado[0];
  //   this.IsAdd = false;
  // }

  // public delete() {

  // }

  public cancel() {

  }

  public send() {
    this.notify.add((this.IsAdd ? 'Nuevos: ' : 'Modificados: ') + JSON.stringify(this.Elemento),NotificationType.info);
  }

}


@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss']
})
export class ClienteFormularioComponent implements OnInit {

  errorObligacion: string = 'Este campo es obligatorio.';
  errorCorreo: string = 'Este correo no cumple con el formato válido.';
  errorMinMax: string = 'Debe tener entre 16 y 67 años.';
  errorfecha: string = 'El formato de fecha no es válido.';

  constructor(public vm: ClienteFormularioViewModel) { }


  ngOnInit(): void {
  }

}
