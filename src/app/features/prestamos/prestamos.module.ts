import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DetalleComponent } from './detalle/detalle.component';
import { PrestamosRoutingModule } from './prestamos-routing,module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CalendarModule,
    ProgressSpinnerModule,
  ]
})
export class PrestamosModule { }
