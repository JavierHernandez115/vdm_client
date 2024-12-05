import { Component } from '@angular/core';
import { EmpleadosService } from '../service/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  empleado = {
    id:0,
    nombre: '',
    telefono: '',
    fecha_entrada: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    // Obtener el ID desde la URL
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.empleado.id = +id; // Convertir el id a número
        this.cargarEmpleado(this.empleado.id);
      }
    });
  }

  cargarEmpleado(id: number): void {
    this.empleadosService.getById(id).subscribe({
      next: (empleado) => {
        this.empleado = empleado;
      },
      error: (err) => {
        console.error('Error al cargar empleado:', err);
      },
    });
  }

  createEmpleado(): void {
    this.empleadosService.create(this.empleado).subscribe({
      next: (nuevoEmpleado) => {
        console.log('Empleado creado con éxito:', nuevoEmpleado);
        this.router.navigate(['/lista']); // Redirigir a la lista tras crear
      },
      error: (err) => {
        console.error('Error al crear empleado:', err);
      },
    });
  }

  updateEmpleado(): void {
    if (this.empleado.id) {
      this.empleadosService.update(this.empleado.id, this.empleado).subscribe({
        next: (empleadoActualizado) => {
          console.log('Empleado actualizado con éxito:', empleadoActualizado);
          this.router.navigate(['/lista']); // Redirigir a la lista tras actualizar
        },
        error: (err) => {
          console.error('Error al actualizar empleado:', err);
        },
      });
    }
  }

  deleteEmpleado(): void {
    if (this.empleado.id) {
      this.empleadosService.delete(this.empleado.id).subscribe({
        next: () => {
          console.log(`Empleado con ID ${this.empleado.id} eliminado con éxito.`);
          this.router.navigate(['/lista']); // Redirigir a la lista tras eliminar
        },
        error: (err) => {
          console.error('Error al eliminar empleado:', err);
        },
      });
    }
  }
  
  

}
