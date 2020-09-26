import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodiosComponent } from './components/episodios/episodios.component';

import { InicioRoutingModule } from './episodios-routing.module';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    EpisodiosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InicioRoutingModule
  ]
})
export class EpisodiosModule { }
