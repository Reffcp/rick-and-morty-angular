import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodiosComponent } from './episodios/episodios.component';
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
      {
        path: 'episodios',
        component: EpisodiosComponent
      },
      {
        path: 'episodios/:page',
        component: EpisodiosComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
