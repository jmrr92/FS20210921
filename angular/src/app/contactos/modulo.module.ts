import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { ContactosComponent, CONTACTOS_COMPONENTES } from './componente.component';
import { CommonComponentModule } from '../common-component/common-component.module';
import { CommonServicesModule } from '../common-services';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    CONTACTOS_COMPONENTES,
  ],
  exports: [
    // CONTACTOS_COMPONENTES,
    ContactosComponent,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,
    PaginatorModule, CommonComponentModule, MyCoreModule,
  ]
})
export class ContactosModule { }
