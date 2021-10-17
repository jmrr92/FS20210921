import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { BLOG_COMPONENTES } from './blog.component';
import { CommonComponentModule } from '../common-component/common-component.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    BLOG_COMPONENTES,
  ],
  exports: [
    BLOG_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule, CommonComponentModule,NgxPaginationModule
  ]
})
export class BlogModule { }
