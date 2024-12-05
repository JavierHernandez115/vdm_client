import { Component, Input } from '@angular/core';
import { AbonosService } from '../service/abonos.service';
import { catchError, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: false,
  
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  AbonosData: any=[];
  errorMessage: string = '';
  selectedId: number | null = null;
  dialogVisible = false;
  @Input() empleadoId: number | null = null;
  constructor(private apiService: AbonosService,
    private route:ActivatedRoute
  ){}
  ngOnInit():void{
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Captura el id de la URL
      if (id) {
        this.empleadoId = +id; // Si se encuentra un id, asignarlo como número
      }
      this.ListarAbonos(); // Llamar a la función para cargar los datos
    });
  }

  ListarAbonos() {
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
          this.AbonosData = data; // Asignar los datos a la propiedad PrestamosData
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
          this.AbonosData = data; // Asignar los datos a la propiedad PrestamosData
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
