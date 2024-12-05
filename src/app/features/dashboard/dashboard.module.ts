import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.-routing.module'; // Asegúrate de importar el módulo de rutas

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule, // Asegúrate de que RouterModule esté aquí
    DashboardRoutingModule, // Asegúrate de que DashboardRoutingModule esté aquí
  ],
})
export class DashboardModule {}
