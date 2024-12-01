import { Component } from '@angular/core';
import { EmpleadosService } from '../service/empleados.service';
@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private empleadosService: EmpleadosService){}


  //Actualiza Empleado
  updateEmpleado(id: number, empleado: { nombre: string; telefono: string; fecha_entrada: string }): void {
    this.empleadosService.update(id, empleado).subscribe({
      next: (empleadoActualizado) => {
        console.log('Empleado actualizado con éxito:', empleadoActualizado);
      },
      error: (err) => {
        console.error('Error al actualizar empleado:', err);
      },
    });
  }
  

  //CreaEmpleado
  createEmpleado(empleado: { nombre: string; telefono: string; fecha_entrada: string }): void {
    this.empleadosService.create(empleado).subscribe({
      next: (nuevoEmpleado) => {
        console.log('Empleado creado con éxito:', nuevoEmpleado);
      },
      error: (err) => {
        console.error('Error al crear empleado:', err);
      },
    });
  }

  //Eliminar un Empleado
  deleteEmpleado(id: number): void {
    this.empleadosService.delete(id).subscribe({
      next: () => {
        console.log(`Empleado con ID ${id} eliminado con éxito.`);
      },
      error: (err) => {
        console.error('Error al eliminar empleado:', err);
      },
    });
  }
  
  

}
