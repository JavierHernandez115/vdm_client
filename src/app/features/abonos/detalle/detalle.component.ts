import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbonosService } from '../service/abonos.service';
@Component({
  selector: 'app-detalle',
  standalone: false,
  
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  constructor(
    private abonosService: AbonosService,
    private route: ActivatedRoute
    ){}
  ngOnInit():void{
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id')); // Obtener el ID como número
      if (id) {
        this.getEmpleadoById(id);
      }
    });
  }

  getEmpleadoById(id: number) {
    this.abonosService.getById(id).subscribe({
      next: (Abono) => console.log('Abono:', Abono),
      error: (error) => console.error('Error:', error),
    });
  }
}