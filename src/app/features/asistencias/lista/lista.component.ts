import { Component, OnInit } from '@angular/core';
import { AsistenciasService } from '../service/asistencias.service';
import { catchError, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-lista',
  standalone: false,
  
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
  asistenciasData: any[] = []; // Solo un arreglo para manejar los datos
  fechaFiltro: string | null = null; // Almacena la fecha obtenida de la URL
  errorMessage: string = '';
  selectedId: number | null = null;
  dialogVisible = false;
  selectedDate: Date | undefined;
  constructor(
    private route: ActivatedRoute, // Para capturar los parámetros
    private apiService: AsistenciasService,
    private router:Router
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
          this.asistenciasData = data; // Actualizar el arreglo único
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
          this.asistenciasData = data; // Actualizar el arreglo único
        },
        (error) => {
          console.error('Error en el bloque subscribe:', error);
        }
      );
  }

  onSearchByDate() {
    if (this.selectedDate) {
      // Formateamos la fecha en formato 'yy-mm-dd'
      const fechaFormateada = this.formatDate(this.selectedDate);
      this.router.navigate(['/asistencias/lista', fechaFormateada]);  // Actualiza la URL con la fecha formateada
    }
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear(); // Año completo (ejemplo: 2024)
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Asegura que el mes tenga dos dígitos
    const day = date.getDate().toString().padStart(2, '0'); // Asegura que el día tenga dos dígitos
    return `${year}-${month}-${day}`; // Formato: yyyy-mm-dd
  }
  

  onDialogClosed() {
    this.dialogVisible = false;
  }

  showDetail(id: number) {
    this.selectedId = id;
    this.dialogVisible = true;
  }
}