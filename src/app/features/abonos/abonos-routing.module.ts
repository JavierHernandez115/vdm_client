import { NgModule } from '@angular/core';
import {ListaComponent} from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'lista', component: ListaComponent},
    {path: 'detalles/:id', component: DetalleComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AbonosRoutingModule { }
  