import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    DetailComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VacacionesModule { }
