import { Component } from '@angular/core';
import { VacacionesService } from '../service/vacaciones.service';
import { catchError,throwError } from 'rxjs';

import { Table } from 'primeng/table';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  vacacionesData: any = [];
  errorMessage: string = '';

  constructor(private apiService: VacacionesService) {}

  ngOnInit(): void {
    this.ListarVacacionesTomadas();
  }

  ListarVacacionesTomadas() {
    this.apiService.getAllVT().pipe(
      catchError((error) => {
        console.error('Error capturado:', error);
        this.errorMessage = 'Hubo un problema al cargar las vacaciones.';
        return throwError(error);
      })
    ).subscribe(
      (data) => {
        console.log('Datos recibidos:', data);
        this.vacacionesData = data;
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error en el bloque subscribe:', error);
      }
    );
  }
}
