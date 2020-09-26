import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonajeRoutingModule } from './personaje-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PersonajeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonajeRoutingModule
  ]
})
export class PersonajeModule { }
