import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MaterialModule } from '../shared/material/material.module';
import { InicioComponent } from './inicio/inicio.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { EpisodiosComponent } from './episodios/episodios.component';



@NgModule({
  declarations: [LayoutComponent, TopNavComponent, InicioComponent, PersonajeComponent, EpisodiosComponent,],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
  ]
})
export class LayoutModule { }
