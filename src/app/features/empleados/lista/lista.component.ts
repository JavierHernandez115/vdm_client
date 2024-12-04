import { Component } from '@angular/core';
import { EmpleadosService } from '../service/empleados.service';
import { catchError, throwError } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-lista',
  standalone: false,
  
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  empleadosData: any=[];
  dialogVisible = false;
  selectedId: number | null = null;
  constructor(private apiService: EmpleadosService){}
  ngOnInit():void{
    this.ListarEmpleados();
  }

  ListarEmpleados() {
    this.apiService.getAll().pipe(
        catchError((error) => {
            console.error('Error capturado:', error);
            return throwError(error);
        })
    ).subscribe(
        (data) => {
            console.log('Datos recibidos:', data);
            this.empleadosData = data;
        },
        (error) => {
            console.error('Error en el bloque subscribe:', error);
        }
    );


  }
  onDialogClosed() {
    this.dialogVisible = false;
  }

  showDetail(id: number) {
    this.selectedId = id;
    this.dialogVisible = true;
  }
}
