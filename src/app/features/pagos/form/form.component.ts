import { Component } from '@angular/core';
import { PagosService } from '../service/pagos.service';
import { EmpleadosService } from '../../empleados/service/empleados.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  empleados: any[] = [];
  constructor(
    private pagosService: PagosService,
    private empleadosService: EmpleadosService,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.cargarEmpleadosYGenerarPagos();
  }

  cargarEmpleadosYGenerarPagos(): void {
    this.empleadosService.getAll().subscribe({
      next: (empleados) => {
        this.empleados = empleados;
        this.generarPagos();
      },
      error: (err) => {
        console.error('Error al cargar empleados:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo cargar la lista de empleados',
        });
      },
    });
  }

  generarPagos(): void {
    if (this.empleados.length === 0) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Aviso',
        detail: 'No hay empleados para generar pagos',
      });
      return;
    }

    let pagosExitosos = 0;

    this.empleados.forEach((empleado) => {
      this.pagosService.generatePagos(empleado.id).subscribe({
        next: () => {
          pagosExitosos++;
          console.log(`Pago registrado para el empleado ID: ${empleado.id}`);
        },
        error: (err) => {
          console.error(
            `Error al registrar pago para el empleado ID: ${empleado.id}`,
            err
          );
        },
        complete: () => {
          if (pagosExitosos === this.empleados.length) {
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Pagos generados para todos los empleados',
            });
          }
        },
      });
    });
  }
}
