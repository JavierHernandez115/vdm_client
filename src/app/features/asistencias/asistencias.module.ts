import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AsistenciasRoutingModule } from './asistencias-routing.module';



@NgModule({
  declarations: [
    ListaComponent,
    FormComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    AsistenciasRoutingModule
  ]
})
export class AsistenciasModule { }
