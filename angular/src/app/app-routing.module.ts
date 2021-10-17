import { InterpolationConfig } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos/componente.component';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent, PageNotFoundComponent } from './main';
import { RegisterUserComponent } from './security';

// http://localhost:4200/contactos/add

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'contactos/add', component: ContactosAddComponent },
  { path: 'contactos/:id/edit', component: ContactosEditComponent },
  { path: 'contactos/:id', component: ContactosViewComponent },
  { path: 'contactos/:id/:kk', component: ContactosViewComponent },
  { path: 'antonie/hasted', redirectTo: '/contactos/27'},
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},
  { path: 'registro', component: RegisterUserComponent },
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
