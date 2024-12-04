import { Component } from '@angular/core';
import { AbonosService } from '../service/abonos.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-lista',
  standalone: false,
  
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  AbonosData: any=[];
  errorMessage: string = '';
  selectedId: number | null = null;
  dialogVisible = false;

  constructor(private apiService: AbonosService){}
  ngOnInit():void{
    this.ListarAbonos();
  }

  ListarAbonos() {
    this.apiService.getAll().pipe(
        catchError((error) => {
            console.error('Error capturado:', error);
            return throwError(error);
        })
    ).subscribe(
        (data) => {
            console.log('Datos recibidos:', data);
            this.AbonosData = data;
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
