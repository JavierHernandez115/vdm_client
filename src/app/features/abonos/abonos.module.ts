import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AbonosRoutingModule } from './abonos-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    AbonosRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CalendarModule,
    ProgressSpinnerModule,
  ]
})
export class AbonosModule { }
