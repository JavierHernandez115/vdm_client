import { Component } from '@angular/core';
import { VacacionesService } from '../service/vacaciones.service';
import { catchError,throwError } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  VacacionesTomadas: any=[];
  constructor(private apiService: VacacionesService){}
  ngOnInit():void{
    this.ListarVacacionesTomadas();
  }

  ListarVacacionesTomadas() {
    this.apiService.getAllVT().pipe(
        catchError((error) => {
            console.error('Error capturado:', error);
            return throwError(error);
        })
    ).subscribe(
        (data) => {
            console.log('Datos recibidos:', data);
            this.VacacionesTomadas = data;
        },
        (error) => {
            console.error('Error en el bloque subscribe:', error);
        }
    );
  }

}


