import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Rutas de empleados
  {path: 'empleados', loadChildren: () => import('./features/empleados/empleados.module').then(m => m.EmpleadosModule) },
  {path: '', redirectTo: '/empleados/lista', pathMatch: 'full' }, // Redirección inicial opcional
  {path: 'vacaciones', loadChildren: () => import('./features/vacaciones/vacaciones.module').then(m => m.VacacionesModule) },
  {path: 'prestamos', loadChildren: () => import('./features/prestamos/prestamos.module'). then( m => m.PrestamosModule)},
  {path: 'asistencias', loadChildren: () => import('./features/asistencias/asistencias.module').then(m => m.AsistenciasModule)},
  {path: 'abonos', loadChildren:()=> import('./features/abonos/abonos.module').then(m => m.AbonosModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
