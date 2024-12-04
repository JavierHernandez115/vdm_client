import { Component } from '@angular/core';
import { VacacionesService } from '../service/vacaciones.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  standalone: false,
  
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  constructor(
    private VacacionesService: VacacionesService,
    private route:ActivatedRoute
  ){}
  ngOnInit():void{
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id')); // Obtener el ID como número
      if (id) {
        this.getVacacionesTById(id);
      }
    });
  }

  getVacacionesTById(id: number){
    this.VacacionesService.getById(id).subscribe({
      next: (VacacionTomada) => console.log('VacacionTomada:', VacacionTomada),
      error: (error) => console.error('Error:', error),
    })
  }
}
