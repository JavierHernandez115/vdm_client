import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DetalleComponent } from './detalle/detalle.component';
import { PrestamosRoutingModule } from './prestamos-routing,module';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule
  ]
})
export class PrestamosModule { }
