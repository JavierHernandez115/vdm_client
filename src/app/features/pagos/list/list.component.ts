import { Component, Input } from '@angular/core';
import {PagosService} from '../service/pagos.service'
import { catchError, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  PagosData: any=[]
  errorMessage: string = '';
  selectedId: number | null = null;
  dialogVisible = false;
  @Input() empleadoId: number | null = null;
  selectedDate: Date | undefined;

  expandedRows: { [key: number]: boolean } = {};


  constructor(private apiService: PagosService, private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.empleadoId = +id;
      }
      this.ListarPagos();
    });
  }

  ListarPagos() {
    if (this.empleadoId) {
      this.apiService
        .getAllByEmpleados(this.empleadoId)
        .pipe(catchError((error) => throwError(error)))
        .subscribe((data) => (this.PagosData = data));
    } else {
      this.apiService
        .getAll()
        .pipe(catchError((error) => throwError(error)))
        .subscribe((data) => (this.PagosData = data));
    }
  }

  toggleRow(pago: any): void {
    this.expandedRows[pago.id] = !this.expandedRows[pago.id];
  }

  onSearchByDate() {
    if (this.selectedDate) {
      // Formateamos la fecha en formato 'yy-mm-dd'
      const fechaFormateada = this.formatDate(this.selectedDate);
      this.router.navigate(['/pagos/lista', fechaFormateada]);  // Actualiza la URL con la fecha formateada
    }
  }

  ListarPrestamosPorFecha(fecha: string) {
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
          this.PagosData = data; // Actualizar el arreglo único
        },
        (error) => {
          console.error('Error en el bloque subscribe:', error);
        }
      );
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear(); // Año completo (ejemplo: 2024)
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Asegura que el mes tenga dos dígitos
    const day = date.getDate().toString().padStart(2, '0'); // Asegura que el día tenga dos dígitos
    return `${year}-${month}-${day}`; // Formato: yyyy-mm-dd
  }
  onRowExpand(event: any): void {
    console.log('Fila expandida:', event.data);
  }

  onRowCollapse(event: any): void {
    console.log('Fila colapsada:', event.data);
  }
}
