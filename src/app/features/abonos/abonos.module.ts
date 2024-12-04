import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AbonosRoutingModule } from './abonos-routing.module';


@NgModule({
  declarations: [
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    AbonosRoutingModule
  ]
})
export class AbonosModule { }
