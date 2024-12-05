import { NgModule } from '@angular/core';
import {ListComponent} from './list/list.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
const routes: Routes = [
    {path: 'lista', component: ListComponent},
    {path: 'lista/:fecha', component: ListComponent},
    {path: 'detalles/:id', component: DetalleComponent},
    {path: 'form', component: FormComponent},
    { path: '', component: ListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagosRoutingModule { }
  