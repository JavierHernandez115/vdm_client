import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'lista', component: ListaComponent },
  { path: 'detalles', component: DetalleComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
