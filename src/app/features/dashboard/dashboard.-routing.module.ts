import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, // Componente principal del dashboard
    children: [
      {
        path: 'empleados',
        loadChildren: () =>
          import('../empleados/empleados.module').then((m) => m.EmpleadosModule), // Carga el módulo de empleados
      },
      {
        path: 'empleados/form',
        loadChildren: () =>
          import('../empleados/empleados.module').then((m) => m.EmpleadosModule), // Carga el módulo de empleados
      },
      {
        path: 'asistencias',
        loadChildren: () =>
          import('../asistencias/asistencias.module').then((m) => m.AsistenciasModule),
      },
      {
        path: 'vacaciones',
        loadChildren: () =>
          import('../vacaciones/vacaciones.module').then((m) => m.VacacionesModule),
      },
      {
        path: 'prestamos',
        loadChildren: () =>
          import('../prestamos/prestamos.module').then((m) => m.PrestamosModule),
      },
      {
        path: 'pagos',
        loadChildren: () =>
          import('../pagos/pagos.module').then((m) => m.PagosModule),
      },
      {
        path: 'pagos/form',
        loadChildren: () =>
          import('../pagos/pagos.module').then((m) => m.PagosModule),
      },
      { path: '', redirectTo: 'empleados', pathMatch: 'full' }, // Redirige por defecto a empleados
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
