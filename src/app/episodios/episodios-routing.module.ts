import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodiosComponent } from './components/episodios/episodios.component';


const routes: Routes = [
  {
    path: '',
    component: EpisodiosComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InicioRoutingModule { }
