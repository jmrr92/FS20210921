import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import {ERROR_LEVEL, LoggerHTTPService, LoggerService, MyCoreModule} from 'src/lib/my-core';
import { AjaxWaitInterceptor, MainModule } from './main';
import { CommonServicesModule } from './common-services';
import { AuthInterceptor, SecurityModule } from './security';
import { environment } from 'src/environments/environment';
import { FormularioComponent } from './formulario/formulario.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { CommonComponentModule } from './common-component/common-component.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactosModule } from './contactos';
import { BlogModule } from './blog';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    CalculadoraComponent,
    FormularioComponent,
    ClienteFormularioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MyCoreModule,
    MainModule,
    CommonServicesModule,
    SecurityModule,
    CommonComponentModule,
    ContactosModule,
    BlogModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: LOCALE_ID, useValue: 'es-ES'},
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
