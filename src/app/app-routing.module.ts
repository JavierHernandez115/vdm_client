import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'empleados', loadChildren: () => import('./features/empleados/empleados.module').then(m => m.EmpleadosModule) },
  { path: '', redirectTo: '/empleados/lista', pathMatch: 'full' }, // Redirección inicial opcional
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
