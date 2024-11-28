import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    ListaComponent,
    FormComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AsistenciasModule { }
