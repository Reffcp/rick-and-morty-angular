import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MaterialModule } from '../shared/material/material.module';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [LayoutComponent, TopNavComponent, InicioComponent,],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
  ]
})
export class LayoutModule { }
