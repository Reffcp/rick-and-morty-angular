import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutComponent } from './layout.component';
import { PersonajeComponent } from './personaje/personaje.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'inicio'
      },
      {
        path:'inicio',
        component: InicioComponent
      },
      {
        path:'inicio/:page',
        component: InicioComponent
      },
      {
        path:'personaje/:id/:page',
        component: PersonajeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
