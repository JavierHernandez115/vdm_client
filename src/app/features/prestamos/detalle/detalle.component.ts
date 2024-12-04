import { Component } from '@angular/core';
import { PrestamosService } from '../service/prestamos.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle',
  standalone: false,
  
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  constructor(
    private prestamosService: PrestamosService,
    private route: ActivatedRoute
    ){}
  ngOnInit():void{
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id')); // Obtener el ID como número
      if (id) {
        this.getPrestamoById(id);
      }
    });
  }

  getPrestamoById(id: number) {
    this.prestamosService.getById(id).subscribe({
      next: (empleado) => console.log('Empleado:', empleado),
      error: (error) => console.error('Error:', error),
    });
  }
}
