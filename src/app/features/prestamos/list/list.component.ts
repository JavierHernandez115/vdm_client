import { Component, Input } from '@angular/core';
import { PrestamosService } from '../service/prestamos.service';
import { catchError ,throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  PrestamosData: any=[];
  errorMessage: string = '';
  selectedId: number | null = null;
  dialogVisible = false;
  @Input() empleadoId: number | null = null;
  constructor(
    private apiService: PrestamosService,
    private route: ActivatedRoute
  ){}
  ngOnInit():void{
     // Capturar el id del empleado desde la URL
     this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Captura el id de la URL
      if (id) {
        this.empleadoId = +id; // Si se encuentra un id, asignarlo como número
      }
      this.ListarPrestamos(); // Llamar a la función para cargar los datos
    });
  }

  ListarPrestamos() {
    if (this.empleadoId) {
      // Si hay un empleadoId, llamar a la función que consulta por empleado
      this.apiService.getAllByEmpleados(this.empleadoId).pipe(
        catchError((error) => {
          console.error('Error capturado:', error);
          return throwError(error);
        })
      ).subscribe(
        (data) => {
          console.log('Datos recibidos:', data);
          this.PrestamosData = data; // Asignar los datos a la propiedad PrestamosData
        },
        (error) => {
          console.error('Error en el bloque subscribe:', error);
        }
      );
    } else {
      // Si no hay un empleadoId, llamar a la función que consulta todos los préstamos
      this.apiService.getAll().pipe(
        catchError((error) => {
          console.error('Error capturado:', error);
          return throwError(error);
        })
      ).subscribe(
        (data) => {
          console.log('Datos recibidos:', data);
          this.PrestamosData = data; // Asignar los datos a la propiedad PrestamosData
        },
        (error) => {
          console.error('Error en el bloque subscribe:', error);
        }
      );
    }
  }

  onDialogClosed() {
    this.dialogVisible = false;
  }

  showDetail(id: number) {
    this.selectedId = id;
    this.dialogVisible = true;
  }
}

