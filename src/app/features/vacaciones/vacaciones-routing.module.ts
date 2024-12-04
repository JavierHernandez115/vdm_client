import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import path from 'path';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'lista', component: ListComponent},
    {path: 'detalles/:id', component: DetailComponent},
    {path: 'form', component: FormComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class VacacionesRoutingModule { }
  