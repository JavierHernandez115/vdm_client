import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AsistenciasRoutingModule } from './asistencias-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';



@NgModule({
  declarations: [
    ListaComponent,
    FormComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    AsistenciasRoutingModule,
    TableModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    CalendarModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    CheckboxModule
  ],
})
export class AsistenciasModule { }
