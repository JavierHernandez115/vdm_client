import { Component } from '@angular/core';
import { EmpleadosService } from '../service/empleados.service';
@Component({
  selector: 'app-detalle',
  standalone: false,
  
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  constructor(private empleadosService: EmpleadosService){}
  ngOnInit():void{
    this.getEmpleadoById(1);
  }

  getEmpleadoById(id: number) {
    this.empleadosService.getById(id).subscribe({
      next: (empleado) => console.log('Empleado:', empleado),
      error: (error) => console.error('Error:', error),
    });
  }
}
