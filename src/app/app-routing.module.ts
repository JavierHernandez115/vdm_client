import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './features/empleados/form/form.component';
import { DetalleComponent } from './features/empleados/detalle/detalle.component';

const routes: Routes = [
  { path: 'empleados', loadChildren: () => import('./features/empleados/empleados.module').then(m => m.EmpleadosModule) },
  { path: '', redirectTo: '/empleados/lista', pathMatch: 'full' }, // Redirección inicial opcional
  {path: 'empleados/form', component:FormComponent},
  {path: 'empleados/details', component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
