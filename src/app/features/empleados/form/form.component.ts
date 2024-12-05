import { Component } from '@angular/core';
import { EmpleadosService } from '../service/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  empleado: any = {
    nombre: '',
    telefono: '',
    fecha_entrada: '',
    salario: null,
  };

  constructor(
    private empleadosService: EmpleadosService,
    private messageService: MessageService
  ) {}

  createEmpleado(): void {
    this.empleadosService.create(this.empleado).subscribe({
      next: (res) => {
        this.empleado.id = res.id;
        this.createSalario(); // Crear salario después del empleado
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Empleado creado exitosamente',
        });
      },
      error: (err) => {
        console.error('Error al crear empleado:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo crear el empleado',
        });
      },
    });
  }

  createSalario(): void {
    console.log('Datos enviados para registrar salario:', {
        empleado_id: this.empleado.id,
        sueldo_semanal: this.empleado.salario,
    });

    this.empleadosService.createSalario(this.empleado.id, this.empleado.salario).subscribe({
        next: () => {
            this.messageService.add({
                severity: 'success',
                summary: 'Éxito',
                detail: 'Salario registrado exitosamente',
            });
        },
        error: (err: any) => {
            console.error('Error al registrar salario:', err);
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'No se pudo registrar el salario',
            });
        },
    });
  }

  updateEmpleado(): void {
    this.empleadosService.update(this.empleado.id, this.empleado).subscribe({
      next: () => {
        this.updateSalario(); // Actualizar salario junto con el empleado
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Empleado actualizado exitosamente',
        });
      },
      error: (err) => {
        console.error('Error al actualizar empleado:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo actualizar el empleado',
        });
      },
    });
  }

  updateSalario(): void {
    this.empleadosService.updateSalario(this.empleado.id, { salario: this.empleado.salario }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Salario actualizado exitosamente',
        });
      },
      error: (err) => {
        console.error('Error al actualizar salario:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo actualizar el salario',
        });
      },
    });
  }

  deleteEmpleado(): void {
    this.empleadosService.delete(this.empleado.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Empleado eliminado exitosamente',
        });
      },
      error: (err) => {
        console.error('Error al eliminar empleado:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo eliminar el empleado',
        });
      },
    });
  }
  
  

}
