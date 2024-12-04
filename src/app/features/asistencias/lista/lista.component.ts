import { Component, OnInit } from '@angular/core';
import { AsistenciasService } from '../service/asistencias.service';
import { catchError, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lista',
  standalone: false,
  
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
  asistencias: any[] = []; // Solo un arreglo para manejar los datos
  fechaFiltro: string | null = null; // Almacena la fecha obtenida de la URL

  constructor(
    private route: ActivatedRoute, // Para capturar los parámetros
    private apiService: AsistenciasService
  ) {}

  ngOnInit(): void {
    // Escuchar los parámetros de la ruta
    this.route.paramMap.subscribe((params) => {
      this.fechaFiltro = params.get('fecha'); // Obtener la fecha de la URL

      if (this.fechaFiltro) {
        // Si hay fecha, listar asistencias filtradas
        this.ListarAsistenciasPorFecha(this.fechaFiltro);
      } else {
        // Si no hay fecha, listar todas las asistencias
        this.ListarAsistencias();
      }
    });
  }

  ListarAsistencias() {
    this.apiService
      .getAll()
      .pipe(
        catchError((error) => {
          console.error('Error capturado en general:', error);
          return throwError(error);
        })
      )
      .subscribe(
        (data) => {
          console.log('Datos generales recibidos:', data);
          this.asistencias = data; // Actualizar el arreglo único
        },
        (error) => {
          console.error('Error en el bloque subscribe:', error);
        }
      );
  }

  ListarAsistenciasPorFecha(fecha: string) {
    this.apiService
      .getByDate(fecha)
      .pipe(
        catchError((error) => {
          console.error(`Error capturado para la fecha ${fecha}:`, error);
          return throwError(error);
        })
      )
      .subscribe(
        (data) => {
          console.log(`Datos filtrados para la fecha ${fecha}:`, data);
          this.asistencias = data; // Actualizar el arreglo único
        },
        (error) => {
          console.error('Error en el bloque subscribe:', error);
        }
      );
  }
}