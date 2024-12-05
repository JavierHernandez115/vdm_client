import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormComponent } from './form/form.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PagosRoutingModule } from './pagos-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    DetalleComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PagosRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CalendarModule,
    ProgressSpinnerModule,
    FormsModule,
  ]
})
export class PagosModule { }
