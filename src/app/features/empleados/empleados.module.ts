import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormComponent } from './form/form.component';
import { EmpleadosRoutingModule } from './empleados-routing.module';


@NgModule({
  declarations: [
    ListaComponent,
    DetalleComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
