import { Component } from '@angular/core';
import { PrestamosService } from '../service/prestamos.service';
import { catchError ,throwError } from 'rxjs';
@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  Prestamos: any=[];
  constructor(private apiService: PrestamosService){}
  ngOnInit():void{
    this.ListarPrestamos();
  }

  ListarPrestamos() {
    this.apiService.getAll().pipe(
        catchError((error) => {
            console.error('Error capturado:', error);
            return throwError(error);
        })
    ).subscribe(
        (data) => {
            console.log('Datos recibidos:', data);
            this.Prestamos = data;
        },
        (error) => {
            console.error('Error en el bloque subscribe:', error);
        }
    );
}
}

