import { Component } from '@angular/core';
import { EmpleadosService } from '../service/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detalle',
  standalone: false,
  
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css',
  
})
export class DetalleComponent {

  empleadoData:any
  constructor(
    private empleadosService: EmpleadosService,
    private route: ActivatedRoute,
    private router: Router
    ){}
  ngOnInit():void{
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id')); // Obtener el ID como número
      if (id) {
        this.getEmpleadoById(id);
      }
    });
  }

  getEmpleadoById(id: number): void {
    this.empleadosService.getById(id).subscribe({
      next: (empleado) => {
        this.empleadoData = empleado; // Guardamos la información del empleado
      },
      error: (error) => {
        console.error('Error al obtener el empleado:', error);
      },
    });
  }

  navigateToEdit(): void {
    if (this.empleadoData) {
      this.router.navigate([`/empleados/form/`, this.empleadoData.id]); // Navegar a la edición de empleado
    }
  }
}
