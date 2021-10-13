import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactosComponent, CONTACTOS_COMPONENTES } from './componente.component';



@NgModule({
  declarations: [
    CONTACTOS_COMPONENTES
  ],
  exports: [
    CONTACTOS_COMPONENTES
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
   MyCoreModule, CommonServicesModule,
    ]

})
export class ContactosModule { }
