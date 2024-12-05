import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormComponent } from './form/form.component';
import { EmpleadosRoutingModule } from './empleados-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ListaComponent,
    DetalleComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CalendarModule,
    ProgressSpinnerModule,
    FormsModule
  ]
})
export class EmpleadosModule { }
