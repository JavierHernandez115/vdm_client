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
  PrestamosData: any=[];
  errorMessage: string = '';
  selectedId: number | null = null;
  dialogVisible = false;
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
            this.PrestamosData = data;
        },
        (error) => {
            console.error('Error en el bloque subscribe:', error);
        }
    );
  }

  onDialogClosed() {
    this.dialogVisible = false;
  }

  showDetail(id: number) {
    this.selectedId = id;
    this.dialogVisible = true;
  }
}

