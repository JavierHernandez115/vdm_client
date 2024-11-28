import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrestamosModule { }
