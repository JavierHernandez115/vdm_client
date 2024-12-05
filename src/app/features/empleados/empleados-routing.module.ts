import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormComponent } from './form/form.component';
import { ListComponent as PrestamosListComponent } from '../prestamos/list/list.component'; 
import { ListComponent as VacacionesListComponent } from '../vacaciones/list/list.component';
import { ListaComponent as AbonosListComponent } from '../abonos/lista/lista.component';
const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'lista', component: ListaComponent },
  {
    path: 'detalles/:id',
    component: DetalleComponent,
    children: [
      {
        path: 'prestamos/:id',
        component: PrestamosListComponent, // Muestra el ListComponent de PrestamosModule
      },
      {
        path: 'vacaciones_tomadas/:id',
        component: VacacionesListComponent, // Muestra el ListComponent de vacaciones
      },
      {
        path: 'abonos/:id',
        component: AbonosListComponent, // Muestra el ListComponent de vacaciones
      },
    ],
  },
  { path: 'form', component: FormComponent },
  { path: 'form/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
