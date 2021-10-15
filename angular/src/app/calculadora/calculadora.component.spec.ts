import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService } from '../common-services';

import { CalculadoraComponent } from './calculadora.component';


describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let log: LoggerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers: [ LoggerService, NotificationService],
      schemas: [ NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    log = new LoggerService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Calculadora',()=>{
  let log: LoggerService;
  beforeEach(() => {
    log = new LoggerService();
  });

  describe('Calculos',()=>{
      it('poner_digito', () => {
          let c = new CalculadoraComponent(log);
          c.ponerDigito('1');
          expect(c.pantalla).toBe('1');
          c.ponerDigito('0');
          expect(c.pantalla).toBe('10');
      });

      it('sumar', () => {
          let c = new CalculadoraComponent(log);
          c.ponerDigito('10');
          c.operar('+');
          c.ponerDigito('5');
          c.operar('=');
          expect(c.pantalla).toBe('15');
      });

      it('restar', () => {
          let c = new CalculadoraComponent(log);
          c.ponerDigito('20');
          c.operar('-');
          c.ponerDigito('14')
          c.operar('=');
          expect(c.pantalla).toBe('6');
      });

      it('multiplicar', () => {
          let c = new CalculadoraComponent(log);
          c.ponerDigito('6');
          c.operar('*');
          c.ponerDigito('2')
          c.operar('=');
          expect(c.pantalla).toBe('12');
      });

      it('dividir', () => {
          let c = new CalculadoraComponent(log);
          c.ponerDigito('12');
          c.operar('/');
          c.ponerDigito('6')
          c.operar('=');
          expect(c.pantalla).toBe('2');
      });

  })

  describe('Operaciones_Borrar',()=>{
      it('borrarDigito_positivo', () => {
          let c = new CalculadoraComponent(log);
          c.ponerDigito('3234');
          c.borrarDigito();
          expect(c.pantalla).toBe('323');
          c.borrarDigito();
          expect(c.pantalla).toBe('32');
          c.borrarDigito();
          expect(c.pantalla).toBe('3');
          c.borrarDigito();
          expect(c.pantalla).toBe('0');
      });

      it('borrarDigito_negativo', () => {
          let c = new CalculadoraComponent(log);
          c.ponerDigito('-3234');
          c.borrarDigito();
          expect(c.pantalla).toBe('-323');
          c.borrarDigito();
          expect(c.pantalla).toBe('-32');
          c.borrarDigito();
          expect(c.pantalla).toBe('-3');
          c.borrarDigito();
          expect(c.pantalla).toBe('0');
      });

  })

  describe('Operaciones_cambiarSignos',()=>{
      it('cambiarSigno', () => {
          let c = new CalculadoraComponent(log);
          c.ponerDigito('3');
          c.cambiarSigno();
          expect(c.pantalla).toBe('-3');
      });
  })

  describe('Operaciones_Coma',()=>{
      it('ponerComa_positivo', () => {
          let c = new CalculadoraComponent(log);
          c.ponerDigito('3');
          c.ponerComa();
          c.ponerDigito('4');
          expect(c.pantalla).toBe('3.4');
      });

      it('ponerComa_negativo', () => {
          let c = new CalculadoraComponent(log);
          c.ponerDigito('-3');
          c.ponerComa();
          c.ponerDigito('4');
          expect(c.pantalla).toBe('-3.4');
      });

      it('empezar_coma', () => {
          let c = new CalculadoraComponent(log);
          c.ponerComa();
          c.ponerDigito('2');
          expect(c.pantalla).toBe('0.2');
      });
  })

})
