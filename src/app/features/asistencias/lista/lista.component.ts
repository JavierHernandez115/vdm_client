import { Component } from '@angular/core';
import { AsistenciasService } from '../service/asistencias.service';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-lista',
  standalone: false,
  
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  data: any=[];
  constructor(private apiService: AsistenciasService){}
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
            this.data = data;
        },
        (error) => {
            console.error('Error en el bloque subscribe:', error);
        }
    );
}
}
