import { Component } from '@angular/core';
import { PrestamosService } from '../service/prestamos.service';
import { EmpleadosService } from '../../empleados/service/empleados.service'; // Servicio para listar empleados
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  prestamo = {
    id: 0,
    empleado: null, // ID del empleado seleccionado
    monto_prestamo: '',
    abono_semanal: '',
    razon: '',
    fecha_prestamo: '', // Formato 'yy-mm-dd'
  };

  empleados: any[] = []; // Lista de empleados para el dropdown

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prestamosService: PrestamosService,
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    // Cargar empleados para el dropdown
    this.empleadosService.getAll().subscribe({
      next: (data) => (this.empleados = data),
      error: (err) => console.error('Error al cargar empleados:', err),
    });

    // Obtener el ID desde la URL
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.prestamo.id = +id;
        this.cargarPrestamo(this.prestamo.id);
      }
    });
  }

  cargarPrestamo(id: number): void {
    this.prestamosService.getById(id).subscribe({
      next: (prestamo) => {
        // Convertir la fecha al formato aceptado por el componente del formulario
        prestamo.fecha_prestamo = prestamo.fecha_prestamo.split('T')[0];
        this.prestamo = prestamo;
      },
      error: (err) => console.error('Error al cargar préstamo:', err),
    });
  }

  createPrestamo(): void {
    this.prestamosService.create(this.prestamo).subscribe({
      next: (nuevoPrestamo) => {
        console.log('Préstamo creado con éxito:', nuevoPrestamo);
        this.router.navigate(['/lista']); // Redirigir a la lista
      },
      error: (err) => console.error('Error al crear préstamo:', err),
    });
  }

  updatePrestamo(): void {
    if (this.prestamo.id) {
      this.prestamosService.update(this.prestamo.id, this.prestamo).subscribe({
        next: (prestamoActualizado) => {
          console.log('Préstamo actualizado con éxito:', prestamoActualizado);
          this.router.navigate(['/lista']); // Redirigir a la lista
        },
        error: (err) => console.error('Error al actualizar préstamo:', err),
      });
    }
  }

  deletePrestamo(): void {
    if (this.prestamo.id) {
      this.prestamosService.delete(this.prestamo.id).subscribe({
        next: () => {
          console.log(`Préstamo con ID ${this.prestamo.id} eliminado con éxito.`);
          this.router.navigate(['/lista']); // Redirigir a la lista
        },
        error: (err) => console.error('Error al eliminar préstamo:', err),
      });
    }
  }
}
