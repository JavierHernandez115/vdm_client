import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'lista', component: ListComponent },
  { path: 'detalles/:id', component: DetalleComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
